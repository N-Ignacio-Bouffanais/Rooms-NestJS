import {
  Injectable,
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

  async StuSignIn(loginDto: LoginDto) {
    const findUser = await this.prisma.student.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!findUser) throw new HttpException('Estudiante no encontrado', 404);

    const checkPassword = await bcrypt.compare(
      loginDto.password,
      findUser.hash,
    );

    if (!checkPassword) throw new HttpException('Contraseña incorrecta', 403);

    const payload = { id: findUser.id, firstname: findUser.firstname };

    const token = this.jwtService.sign(payload, {
      secret: this.config.get<string>('SECRET_KEY'),
      expiresIn: '15m',
    });

    const data = {
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      role: findUser.role,
      token,
    };

    return data;
  }
  async ProfSignIn(loginDto: LoginDto) {
    const findUser = await this.prisma.professor.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!findUser) throw new HttpException('Profesor no encontrado', 404);

    const checkPassword = await bcrypt.compare(
      loginDto.password,
      findUser.hash,
    );

    if (!checkPassword) throw new HttpException('Contraseña incorrecta', 403);

    const payload = { id: findUser.id, firstname: findUser.firstname };

    const token = this.jwtService.sign(payload, {
      secret: this.config.get<string>('SECRET_KEY'),
      expiresIn: '15m',
    });

    const data = {
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      role: findUser.role,
      token,
    };

    return data;
  }

  async StuSignUp(registerDto: RegisterDto): Promise<{}> {
    const findUser = await this.prisma.student.findUnique({
      where: {
        email: registerDto.email,
      },
    });

    if (!findUser) {
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const newUser = await this.prisma.student.create({
        data: {
          email: registerDto.email,
          role: 'estudiante',
          firstname: registerDto.firstname,
          lastname: registerDto.lastname,
          hash: hashedPassword,
        },
      });

      const user = {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        role: newUser.role,
      };

      return user;
    }

    throw new Error(
      'Ya existe un estudiante con este correo, Por favor intente con otro',
    );
  }

  async ProfSignUp(registerDto: RegisterDto): Promise<{}> {
    const findUser = await this.prisma.professor.findUnique({
      where: {
        email: registerDto.email,
      },
    });

    if (!findUser) {
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const newUser = await this.prisma.professor.create({
        data: {
          email: registerDto.email,
          role: "profesor",
          firstname: registerDto.firstname,
          lastname: registerDto.lastname,
          hash: hashedPassword,
        },
      });

      const user = {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        role: newUser.role,
      };

      return user;
    }

    throw new Error(
      'Ya existe un profesor con este correo, Por favor intente con otro',
    );
  }
}
