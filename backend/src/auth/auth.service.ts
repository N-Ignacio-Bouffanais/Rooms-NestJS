import {
  Injectable,
  ForbiddenException,
  HttpStatus,
  HttpException
} from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async SignIn(loginDto: LoginDto) {}

  async SignUp(registerDto: RegisterDto):Promise<{}> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: registerDto.email,
        },
      });

      if (!user) {
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        return await this.prisma.user.create({
          data: {
            email: registerDto.email,
            role: registerDto.role,
            username: registerDto.username,
            hash: hashedPassword,
          },
        });
      }

      throw new Error("Ya existe un usuario con este correo, Por favor intente con otro");

    } catch (error) {
      throw new HttpException(
        'Error al crear un nuevo usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
