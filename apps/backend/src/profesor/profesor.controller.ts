import { Controller, Get, Body, Patch, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorDto } from './dto/profesor.dto';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Get(':professorId')
  findAll(@Param('professorId') professorId: string) {
    try {
      return this.profesorService.findAll(professorId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get('mysubjects/:professorId')
  findInscripted(@Param('professorId') professorId: string) {
    try {
      return this.profesorService.findInscripted(professorId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch()
  update(@Body() profesorDto: ProfesorDto) {
    try {
      return this.profesorService.update(profesorDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch('dropSubject')
  dropSubject(@Body() profesorDto: ProfesorDto) {
    return this.profesorService.dropSubject(profesorDto);
  }
}
