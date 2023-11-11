import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto} from './dto/student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get(':studentId')
  findAll(@Param('studentId') studentId: string) {
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
