import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getMyClass(name: { name: string }) {
    console.log(name.name);
    const myClass = await this.prisma.student.findMany({
      where:{
        subject:{
          some:{
            name: name.name,
          }
        }
      }
    });
    return myClass
  }
}
