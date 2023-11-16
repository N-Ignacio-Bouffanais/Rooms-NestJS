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
  @Post('images')
  @UseInterceptors(FilesInterceptor('file')) // 'files' debe coincidir con el nombre del campo del formulario
  async uploadFile(@UploadedFiles() file) {
    console.log(file);
    // return { filename: file.filename };
  }

  @Get('images/:folder/:filename')
  @UseInterceptors(FilesInterceptor('file'))
  async serveImages(
    @Param('folder') folder: string,
    @Param('filename') filename: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Res() res: Response,
  ): Promise<void> {}
}
