import { Controller, Get, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorDto } from './dto/profesor.dto';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Get(":id")
  findAll(@Param("id") professorId:string) {
    try {
      return this.profesorService.findAll(professorId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() profesorDto: ProfesorDto) {
    try {
      return this.profesorService.update(+id, profesorDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.profesorService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
