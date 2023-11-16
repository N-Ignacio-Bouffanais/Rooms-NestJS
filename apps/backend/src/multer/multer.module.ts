import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileUploadController } from './multer.controller';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads', // specify the destination folder
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const originalname = file.originalname;
          const extension = originalname.substring(
            originalname.lastIndexOf('.'),
            originalname.length,
          );
          callback(null, uniqueSuffix + extension);
        },
      }),
    }),
  ],
  controllers: [FileUploadController],
})
export class FileUploadModule {}
