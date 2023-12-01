import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import path from 'path';

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

  async getAllFiles(res: Response, subject: string, arrayOfFiles) {
    const dir = `./uploads/${subject}/`;
    if (!fs.existsSync(dir)) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Files not found' });
    }

    try {
      arrayOfFiles = arrayOfFiles || [];

      const files = fs.readdirSync(dir);

      files.forEach(function (file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
          arrayOfFiles = getAllFiles(dir + '/' + file, arrayOfFiles);
        } else {
          arrayOfFiles.push(path.join(__dirname, dir, '/', file));
        }
      });

      return arrayOfFiles;

      res.status(HttpStatus.ACCEPTED).json(files);
    } catch (error) {
      console.error(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return res;
  }
}
