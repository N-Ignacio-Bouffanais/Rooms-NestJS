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

  async SignIn(loginDto: LoginDto) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!findUser) throw new HttpException('User not found', 404);

    const checkPassword = await bcrypt.compare(
      loginDto.password,
      findUser.hash,
    );

    if (!checkPassword) throw new HttpException('Contraseña incorrecta', 403);

    const payload = { id: findUser.id, username: findUser.username}

    const token = this.jwtService.sign(payload)

    const data = {};

    return data;
  }

  async SignUp(registerDto: RegisterDto):Promise<{}> {
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: registerDto.email,
      },
    });

    if (!findUser) {
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

    throw new Error(
      'Ya existe un usuario con este correo, Por favor intente con otro',
    );
  }
}
