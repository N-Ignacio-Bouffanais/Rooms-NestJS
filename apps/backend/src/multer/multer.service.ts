import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';

@Injectable()
export class MulterService {
  async getFiles(res: Response, subject: string, username: string) {
    const uploadDirectory = `./uploads/${subject}/${username}`;
    if (!fs.existsSync(uploadDirectory)) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'File not found' });
    }
    console.log(uploadDirectory);

    try {
      const files = fs.readdirSync(uploadDirectory);
      console.log(files);
      res.status(HttpStatus.ACCEPTED).json(files);
    } catch (error) {
      console.error(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return res;
  }

  async readAllFiles(subject: string, res: Response) {
    const path = `./uploads/${subject}/`;
    if (!fs.existsSync(path)) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Files not found' });
    }

    const arrayOfFiles:Array<string> = []

    try {
      
      const folders = await fs.promises.readdir(path);
      const x = folders.map((i) =>  {
        const stat = fs.statSync(`${path}`);
        if (stat.isDirectory()) {
          console.log("directory: " + path);
          const files = fs.readdirSync(`${path}/${i}`);
          console.log("los archivos son:"+files)
          arrayOfFiles.push(String(files));
          console.log("array:"+arrayOfFiles);
        }
      });
      console.log(x)
      res.status(HttpStatus.ACCEPTED).json(arrayOfFiles);
    } catch (error) {
      console.error(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return res;
  }
}
