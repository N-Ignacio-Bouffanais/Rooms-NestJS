import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { StudentDto} from './dto/student.dto';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Get(':estudianteId')
  findAll(@Param('estudianteId') estudianteId: string) {
    return this.estudianteService.findAll(estudianteId);
  }

  @Get('mysubjects/:estudianteId')
  findInscriptions(@Param('estudianteId') estudianteId: string) {
    return this.estudianteService.findInscriptions(estudianteId);
  }

  @Patch()
  update(@Body() studentDto: StudentDto) {
    return this.estudianteService.update(studentDto);
  }

  @Patch('dropSubject')
  dropSubject(@Body() studentDto: StudentDto) {
    return this.estudianteService.dropSubject(studentDto);
  }
}
