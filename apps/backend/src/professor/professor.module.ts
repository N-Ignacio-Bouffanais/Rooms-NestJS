import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';

@Module({
  controllers: [ProfessorController],
  providers: [ProfessorService]
})
export class ProfessorModule {}
