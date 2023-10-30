import { Injectable } from '@nestjs/common';
import { ProfesorDto } from './dto/profesor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfesorService {
  constructor(private prisma: PrismaService) {}
  findAll(professorId:string) {
    const id = professorId.split('-');
    const lastname = id[1];
    const firstname = id[0];
    return this.prisma.subject.findMany({
      where:{
        professor:{
          firstname:firstname,
          lastname:lastname
        }
      }
    });
  }

  update(id: number, profesorDto: ProfesorDto) {
    return `This action updates a #${id} profesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesor`;
  }
}
