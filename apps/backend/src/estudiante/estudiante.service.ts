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
    
  }

  findInscriptions(estudianteId: string) {
    const id = estudianteId.split('-');
    const lastname = id[1];
    const firstname = id[0];
    
  }

  update(estudianteDto: StudentDto) {
    
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
