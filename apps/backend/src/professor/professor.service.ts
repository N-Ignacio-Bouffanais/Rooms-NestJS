import { Injectable } from '@nestjs/common';
import { ProfessorDto } from './dto/professor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessorService {
  constructor(private prisma: PrismaService) {}
  async findAll(professorId: string) {
    console.log(professorId)
    return this.prisma.subject.findMany({
      where: {
        professor:{
          is:null
        }
      },
    });
  }
  async findInscripted(professorId: string) {
    console.log(professorId);
    const id = professorId.split('-');
    const lastname = id[1];
    const firstname = id[0];
    return this.prisma.subject.findMany({
      where: {
        professor: {
          firstname: firstname,
          lastname:lastname
        },
      },
    });
  }

  async update(profesorDto: ProfessorDto) {
    console.log(profesorDto)
    const professor = await this.prisma.professor.findFirst({
      where: {
        email: profesorDto.email,
      },
    });
    if (professor) {
      const updatedSubject = await this.prisma.subject.update({
        where: {
          name: profesorDto.subjectName,
        },
        data: {
          professor: {
            connect: {
              id: professor.firstname
            },
          },
        },
      });
      return updatedSubject;
    }
  }

  async dropSubject(profesorDto:ProfessorDto) {
    const professor = await this.prisma.professor.findFirst({
      where: {
        email: profesorDto.email,
      },
    });
    if (professor) {
      const updatedSubject = await this.prisma.subject.update({
        where: {
          name: profesorDto.subjectName,
        },
        data: {
          professor: {
            disconnect: {
              id: professor.firstname,
            },
          },
        },
      });
      return updatedSubject;
    }
  }
}
