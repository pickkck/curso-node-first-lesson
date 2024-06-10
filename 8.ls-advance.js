const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

async function ls(directory) {
    let files;
    try {
        files = await fs.readdir(directory)
    } catch {
        console.error(`No se pudo leer el directorio ${directory}`)
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;
        try {
            stats = await fs.stat(filePath)
        } catch {
            console.error(`No se pudo leer el archivo ${filePath}`)
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : '-';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        return `${fileType} ${file.padEnd(30)} ${fileSize.toString().padStart(10)} ${fileModified}`;
    })

    const filesInfo = await Promise.all(filesPromises);

    filesInfo.forEach(fileInfo => {
        console.log(fileInfo)
    });
}

ls(folder)