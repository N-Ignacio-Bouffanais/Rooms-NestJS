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
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async SignIn(loginDto: LoginDto) {

    const findUser = await this.prisma.user.findUnique({
      where: {
        email: loginDto.email,
        role: loginDto.role
      },
    });

    if (!findUser) throw new HttpException('Usuario no encontrado', 404);

    const checkPassword = await bcrypt.compare(
      loginDto.password,
      findUser.hash,
    );

    if (!checkPassword) throw new HttpException('Contraseña incorrecta', 403);

    const payload = { id: findUser.id, username: findUser.username };

    const token = this.jwtService.sign(payload, {
      secret: this.config.get<string>('SECRET_KEY'),
      expiresIn: '15m',
    });

    const data = {
      user: findUser.username,
      email: findUser.email,
      role: findUser.role,
      token,
    };

    return data;
  }

  async SignUp(registerDto: RegisterDto): Promise<{}> {
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: registerDto.email,
      },
    });

    if (!findUser) {
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const newUser =  await this.prisma.user.create({
        data: {
          email: registerDto.email,
          role: registerDto.role,
          username: registerDto.username,
          hash: hashedPassword,
        },
      });

      const user = {
        email: newUser.email,
        role: newUser.role,
        username: newUser.username
      }

      return user
    }

    throw new Error(
      'Ya existe un usuario con este correo, Por favor intente con otro',
    );
  }
}
