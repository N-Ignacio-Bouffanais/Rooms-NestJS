import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';

@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService]
})
export class EstudianteModule {}
