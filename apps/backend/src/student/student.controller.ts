import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto} from './dto/student.dto';

@Controller('Student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get(':StudentId')
  findAll(@Param('StudentId') studentId: string) {
    return this.studentService.findAll(studentId);
  }

  @Get('mysubjects/:StudentId')
  findInscriptions(@Param('StudentId') StudentId: string) {
    return this.studentService.findInscriptions(StudentId);
  }

  @Patch()
  update(@Body() studentDto: StudentDto) {
    return this.studentService.update(studentDto);
  }

  @Patch('dropSubject')
  dropSubject(@Body() studentDto: StudentDto) {
    return this.studentService.dropSubject(studentDto);
  }
}
