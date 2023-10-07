import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';

@Module({
  controllers: [ProfesorController],
  providers: [ProfesorService]
})
export class ProfesorModule {}
