import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { MulterService } from './multer.service';
import { Response } from 'express';

@Controller('files')
export class FileUploadController {
  constructor(private readonly multerService: MulterService) {}

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
  async getFiles(
    @Param('subject') subject: string,
    @Param('username') username: string,
    @Res() res: Response,
  ) {
    return this.multerService.getAllFiles(res, subject, username);
  }

  @Get(':subject/:username')
  @UseInterceptors(FilesInterceptor('file'))
  async getSubjectFiles(
    @Param('subject') subject: string,
    @Res() res: Response,
  ) {
    return this.multerService.getSubjectsFiles(res, subject);
  }
}
