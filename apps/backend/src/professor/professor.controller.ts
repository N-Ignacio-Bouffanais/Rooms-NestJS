import { Controller, Get, Body, Patch, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorDto } from './dto/professor.dto';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Get(':professorId')
  findAll(@Param('professorId') professorId: string) {
    try {
      return this.professorService.findAll(professorId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get('mysubjects/:professorId')
  findInscripted(@Param('professorId') professorId: string) {
    try {
      return this.professorService.findInscripted(professorId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch()
  update(@Body() professorDto: ProfessorDto) {
    try {
      return this.professorService.update(professorDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch('dropSubject')
  dropSubject(@Body() professorDto: ProfessorDto) {
    return this.professorService.dropSubject(professorDto);
  }
}
