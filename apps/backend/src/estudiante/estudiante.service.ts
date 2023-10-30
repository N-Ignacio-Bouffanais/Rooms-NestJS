import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaService) {}

  async findAll(estudianteId: string) {
    const id = estudianteId.split('-');
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
    });
  }

  async findInscriptions(estudianteId: string) {
    const id = estudianteId.split('-');
    const lastname = id[1];
    const firstname = id[0];
    return this.prisma.subject.findMany({
      where: {
        student: {
          some: {
            firstname: firstname,
            lastname,
          },
        },
      },
    });
  }

  async update(estudianteDto: StudentDto) {
    const student = await this.prisma.student.findFirst({
      where: {
        email: estudianteDto.email,
      },
    });
    if (student) {
      const updatedSubject = await this.prisma.subject.update({
        where: {
          name: estudianteDto.subjectName,
        },
        data: {
          student: {
            connect: {
              id: student.id,
            },
          },
        },
      });
      return updatedSubject;
    }
  }
  async dropSubject(estudianteDto: StudentDto) {
    const student = await this.prisma.student.findFirst({
      where: {
        email: estudianteDto.email,
      },
    });
    if (student) {
      const updatedSubject = await this.prisma.subject.update({
        where: {
          name: estudianteDto.subjectName,
        },
        data: {
          student: {
            disconnect: {
              id: student.id,
            },
          },
        },
      });
      return updatedSubject;
    }
  }
}
