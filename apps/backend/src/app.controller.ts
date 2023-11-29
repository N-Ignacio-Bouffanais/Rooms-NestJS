import { Controller, Get, Param, Req, Res, Response, StreamableFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import * as fs from 'fs';
import { FilesInterceptor } from '@nestjs/platform-express/multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/myclass/:name')
  async getMyClass(@Param() name: { name: string }) {
    return this.appService.getMyClass(name);
  }
  @Get(':filename')
  @Get()
  getFile(
    @Param('filename') filename: string,
    @Res() res,
  ): StreamableFile {
    const file = fs.createReadStream(
      join(__dirname, '..', 'uploads', filename),
    );
    console.log(file)
    res.set('Content-Type', 'image/jpeg');
    return new StreamableFile(file);
  }
  // @UseInterceptors(FilesInterceptor('file'))
  // getFile(
  //   @Param('filename') filename: string,
  //   @Req() req,
  //   @Response({ passthrough: true }) res,
  // ): StreamableFile {
  //   res.set('Content-Type', 'image/jpeg');
  //   const file = fs.createReadStream(join(process.cwd(), filename));
  //   console.log(file);
  //   return new StreamableFile(file);
  // }
}
