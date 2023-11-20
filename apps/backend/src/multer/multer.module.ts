import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileUploadController } from './multer.controller';
import { diskStorage } from 'multer';
import { Request } from 'express';
import { MulterService } from './multer.service';

interface FileReq extends Request {
  user:{
    username: string
    subject: string
  }
}

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req: FileReq, file, cb) => {
          // Specify the destination folder based on the user name
          console.log(req.params);
          const username = req.params.username;
          const subject = req.params.subject;
          const uploadPath = `uploads/${subject}/${username}`;

          // Crea el directorio si no existe
          const fs = require('fs');
          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
          }
          
          cb(null, uploadPath);
        },
        filename: (req, file, callback) => {
          const uniqueSuffix = Math.round(Math.random()*1e4);
          const originalname = file.originalname.replace('','_');
          callback(null, uniqueSuffix + originalname);
        },
      }),
    }),
  ],
  controllers: [FileUploadController],
  providers: [MulterService],
})
export class FileUploadModule {}
