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
          const originalname = file.originalname;
          const extension = originalname.substring(
            originalname.lastIndexOf('.'),
            originalname.length,
          );
          callback(null, originalname + extension);
        },
      }),
    }),
  ],
  controllers: [FileUploadController],
})
export class FileUploadModule {}
