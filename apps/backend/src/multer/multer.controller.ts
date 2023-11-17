import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express/multer';

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
    @UploadedFiles() files: Express.Multer.File[],
    @Res() res: Response,
  ): Promise<void> {
    console.log(subject,username)
  }
}
