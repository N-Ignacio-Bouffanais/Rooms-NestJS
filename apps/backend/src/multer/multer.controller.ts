import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { Response } from 'express';
import * as fs from 'fs';
import { join } from 'path';

@Controller('files')
export class FileUploadController {
  @Post(':subject/:username')
  @UseInterceptors(FilesInterceptor('file')) // 'files' debe coincidir con el nombre del campo del formulario
  async uploadFile(
    @UploadedFiles() file,
    @Param('subject') subject: string,
    @Param('username') username: string,
  ) {
    console.log(file, subject, username);
    return { filename: file.filename };
  }

  @Get(':subject/:username')
  @UseInterceptors(FilesInterceptor('file'))
  async serveImages(
    @Param('subject') subject: string,
    @Param('username') username: string,
    @Res() res: Response,
    @UploadedFiles() files: Array<Express.Multer.File[]>,
  ) {
    const uploadDirectory = `./uploads/${subject}/${username}`;
    if (!fs.existsSync(uploadDirectory)) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'File not found' });
    }

    const updatedFiles = files.map((file) => {
      // Your file processing logic here
      return file
    });

    return updatedFiles;
  }
}
