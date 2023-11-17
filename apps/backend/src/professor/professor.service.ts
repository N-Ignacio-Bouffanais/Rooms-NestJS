import { Injectable } from '@nestjs/common';
import { ProfessorDto } from './dto/professor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessorService {
  constructor(private prisma: PrismaService) {}
  async findAll(professorId: string) {
    console.log(professorId);
    const subjects = await this.prisma.subject.findMany({
      include:{
        student:{
          include:{
            _count: true,
          }
        }
      },
      where:{
        professorId:null,
      }
    });

    return subjects;
  }
  async findInscripted(professorId: string) {
    console.log(professorId);
    const id = professorId.split('-');
    const lastname = id[1];
    const firstname = id[0];

    const professor = await this.prisma.professor.findFirst({
      where:{
        firstname: firstname,
        lastname: lastname,
      }
    })

    if(!professor) throw new Error('No existe este profesor')

    const subjects = await this.prisma.subject.findMany({
      where:{
        professor:{
          dni: professor.dni,
        }
      }
    });
    return subjects
  }

  async update(profesorDto: ProfessorDto) {
    console.log(profesorDto);
    const subject = await this.prisma.subject.update({
      data:{
        professor:{
          connect: {
            email: profesorDto.email,
          }
        }
      },
      where:{
        name: profesorDto.subjectName
      }
    })
    return subject
  }

  async dropSubject(profesorDto: ProfessorDto) {
    console.log(profesorDto);
    const subject = await this.prisma.subject.update({
      data: {
        professor: {
          disconnect: {
            email: profesorDto.email,
          },
        },
      },
      where: {
        name: profesorDto.subjectName,
      },
    });
    return subject
  }
}
