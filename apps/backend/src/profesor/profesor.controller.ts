import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorDto } from './dto/profesor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('profesor')
export class ProfesorController {
  constructor(
    private readonly profesorService: ProfesorService,
  ) {}

  @Get()
  findAll() {
    try {
      return this.profesorService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() profesorDto: ProfesorDto) {
    return this.profesorService.update(+id, profesorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesorService.remove(+id);
  }
}
