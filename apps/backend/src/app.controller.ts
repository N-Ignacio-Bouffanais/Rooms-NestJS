import { Controller, Get, Param, Req, Res, Response, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/myclass/:name')
  async getMyClass(@Param() name: { name: string }) {
    return this.appService.getMyClass(name);
  }

  @Get(':subject/:student/:filename')
  async serveFile(
    @Param('subject') subject: string,
    @Param('student') student: string,
    @Param('filename') filename: string,
    @Res() res,
  ): Promise<any> {
    res.sendFile(filename, {
      root: `uploads/${subject}/${student}`,
    });
  }
}
