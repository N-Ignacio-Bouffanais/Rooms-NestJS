import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';

@Injectable()
export class MulterService {
  async getAllFiles(res: Response, subject: string, username: string) {
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

  async getSubjectsFiles(res: Response, subject: string) {
    const uploadDirectory = `./uploads/${subject}`;
    if (!fs.existsSync(uploadDirectory)) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'File not found' });
    }
    console.log(uploadDirectory);
  }
}
