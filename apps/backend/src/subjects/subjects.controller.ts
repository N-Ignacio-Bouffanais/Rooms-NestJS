import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  // @Post()
  // create(@Body() createSubjectDto: CreateSubjectDto) {
  //   return this.subjectsService.create(createSubjectDto);
  // }

  @Get()
  findAll() {
    try {
      return this.subjectsService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
  //   return this.subjectsService.update(+id, updateSubjectDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.subjectsService.remove(+id);
  // }
}
