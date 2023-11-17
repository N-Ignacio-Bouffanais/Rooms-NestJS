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
    console.log(studentId)
    return this.prisma.subject.findMany({
      where: {
        student:{
          none:{
            firstname:{
              equals: firstname
            },
            lastname:{
              equals: lastname
            }
          }
        },
        professorId:{
          not: null,
        }
      },
      include:{
        professor:true,
      }
    });
  }

  async findInscriptions(studentId: string) {
    const id = studentId.split('-');
    const lastname = id[1];
    const firstname = id[0];
    console.log(studentId);
    const inscribed = this.prisma.subject.findMany({
      where: {
        student: {
          some: {
            firstname,
            lastname,
          },
        },
      }
    });
      
    return inscribed;
  }

  async update(studentDto: StudentDto) {
    console.log(studentDto.email)
    const updateSubject = await this.prisma.subject.update({
      data:{
        student:{
          connect:{
            email: studentDto.email
          }
        }
      },
      where:{
        name: studentDto.subjectName
      }
    })
    return updateSubject;
    }
  async dropSubject(studentDto: StudentDto) {
    console.log(studentDto);
    const dropSubject = await this.prisma.subject.update({
      data: {
        student: {
          disconnect: {
            email: studentDto.email,
          },
        },
      },
      where: {
        name: studentDto.subjectName
      },
    });
    return dropSubject
  }
}
