import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async findAll(studentId: string) {
    const id = studentId.split('-');
    const lastname = id[1];
    const firstname = id[0];
    return this.prisma.subject.findMany({
      where: {
        NOT: {
          student: {
            some: {
              firstname: firstname,
              lastname: lastname,
            },
          },
        },
      },
      include:{
        professor:true,
      }
    });
  }

  async findInscriptions(studentId: string) {
    // const id = studentId.split('-');
    // const lastname = id[1];
    // const firstname = id[0];
    // return this.prisma.subject.findMany({
    //   where: {
    //     student: {
    //       some: {
    //         firstname: firstname,
    //         lastname,
    //       },
    //     },
    //   },
    // });
  }

  async update(studentDto: StudentDto) {
    // const student = await this.prisma.student.findFirst({
    //   where: {
    //     email: studentDto.email,
    //   },
    // });
    // if (student) {
    //   const updatedSubject = await this.prisma.subject.update({
    //     where: {
    //       name: studentDto.subjectName,
    //     },
    //     data: {
    //       student: {
    //         connect: {
    //           id: student.id,
    //         },
    //       },
    //     },
    //   });
    //   return updatedSubject;
    // }
  }
  async dropSubject(studentDto: StudentDto) {
    // const student = await this.prisma.student.findFirst({
    //   where: {
    //     email: studentDto.email,
    //   },
    // });
    // if (student) {
    //   const updatedSubject = await this.prisma.subject.update({
    //     where: {
    //       name: studentDto.subjectName,
    //     },
    //     data: {
    //       student: {
    //         disconnect: {
    //           id: student.id,
    //         },
    //       },
    //     },
    //   });
    //   return updatedSubject;
    // }
  }
}
