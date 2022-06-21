import {createReadStream} from 'fs'
import { resolve } from 'path';
import {pipeline} from 'stream/promises'
import {customOutput} from '../helpers/output'
import displayCurrentDirectory from '../helpers/display';

export const  handleCat=async([rawPath])=>{
  try {
  const pathToFile= resolve(rawPath)
  const readableStream=createReadStream(pathToFile,{encoding:'utf-8'})
  await pipeline(readableStream, customOutput())
  displayCurrentDirectory()
  } catch (error) {
    console.error('Operation failed');
  }
}