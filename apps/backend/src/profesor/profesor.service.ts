import { Injectable } from '@nestjs/common';
import { ProfesorDto } from './dto/profesor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfesorService {
  constructor(private prisma:PrismaService){}
  findAll() {
    return this.prisma.professor.findMany({
      
    })
  }

  update(id: number, profesorDto: ProfesorDto) {
    return `This action updates a #${id} profesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesor`;
  }
}
