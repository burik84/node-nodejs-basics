import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

export const copy = async () => {
    const folderBase = path.join(__dirName, '/files');
    const folderCopy = path.join(__dirName, '/files_copy');

    try {
        await fs.mkdir(folderCopy);
        const folderFiles=await fs.readdir(folderBase)

        await Promise.all(folderFiles.map(item=>fs.copyFile(`${folderBase}/${item}`,`${folderCopy}/${item}`)))
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

copy()