
import { createHash } from "crypto";
import {readFile} from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const calculateHash = async () => {
    const __fileName = fileURLToPath(import.meta.url);
    const __dirName = dirname(__fileName);
    const fileToHash='/files/fileToCalculateHashFor.txt'

    try {
        const fileContent=await readFile(`${__dirName}${fileToHash}`)
        const hash=createHash('sha256').update(fileContent).digest('hex')
        console.log('Hash: ', hash);
    } catch (error) {
        throw error
    }

};

calculateHash()