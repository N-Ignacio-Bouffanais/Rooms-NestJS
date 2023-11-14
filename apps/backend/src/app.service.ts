import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getMyClass(name: { name: string }) {
    console.log(name.name);
    const myClass = await this.prisma.subject.findUnique({
      where: {
        name: name.name
      },
      include:{
        student: true
      }
    });
    return myClass
  }
}
