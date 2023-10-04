import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubjectsService {
  constructor(private prisma:PrismaService){}
  // create(createSubjectDto: CreateSubjectDto) {
  //   return 'This action adds a new subject';
  // }

  findAll() {
    return this.prisma.subject.findMany({
      orderBy:{
        name:'desc'
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} subject`;
  }

  // update(id: number, updateSubjectDto: UpdateSubjectDto) {
  //   return `This action updates a #${id} subject`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} subject`;
  // }
}
