import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { StudentDto} from './dto/student.dto';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Get(':estudianteId')
  findAll(@Param('estudianteId') estudianteId: string) {
    return this.estudianteService.findAll(estudianteId);
  }

  @Get(':estudianteId')
  findInscriptions(@Param('estudianteId') estudianteId: string) {
    return this.estudianteService.findInscriptions(estudianteId);
  }

  @Patch()
  update(@Body() studentDto: StudentDto) {
    return this.estudianteService.update(studentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteService.remove(+id);
  }
}
