import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaService) {}

  findAll(estudianteId: string) {
    const id = estudianteId.split('-');
    const lastname = id[1];
    const firstname = id[0];
    return this.prisma.subject.findMany({
      where: {
        NOT:{
          student:{
            some:{
              firstname: firstname,
              lastname: lastname
            }
          }
        }
      }
    })
    
  }

  findInscriptions(estudianteId: string) {
    const id = estudianteId.split('-');
    const lastname = id[1];
    const firstname = id[0];
    return this.prisma.subject.findMany({
      where: {
          student: {
            some:{
              firstname: firstname,
            }
          },
        },
    });
  }

  update(estudianteDto: StudentDto) {
    
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
