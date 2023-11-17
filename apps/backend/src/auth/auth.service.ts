import { Injectable, HttpException } from '@nestjs/common';
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

    if (!findUser) throw new HttpException('Student not found', 404);

    const checkPassword = await bcrypt.compare(
      loginDto.password,
      findUser.hash,
    );

    if (!checkPassword) throw new HttpException('Wrong Password', 403);

    const payload = {
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      role: 'student',
      email: findUser.email,
    };

    const token = this.jwtService.sign(payload, {
      secret: this.config.get<string>('SECRET_KEY'),
      expiresIn: '10m',
    });

    return token;
  }
  async ProfSignIn(loginDto: LoginDto) {
    const findUser = await this.prisma.professor.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!findUser) throw new HttpException('Professor not found', 404);

    const checkPassword = await bcrypt.compare(
      loginDto.password,
      findUser.hash,
    );

    if (!checkPassword) throw new HttpException('Wrong Password', 403);

    const payload = {
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      role: 'professor',
      email: findUser.email,
    };

    const token = this.jwtService.sign(payload, {
      secret: this.config.get<string>('SECRET_KEY'),
      expiresIn: '15m',
    });

    return token;
  }

  async StuSignUp(registerDto: RegisterDto) {
    const findUser = await this.prisma.student.findUnique({
      where: {
        email: registerDto.email,
        dni: registerDto.dni
      },
    });
    if(findUser) throw new Error(`User already registered`)

    if (!findUser) {
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const newUser = await this.prisma.student.create({
        data: {
          email: registerDto.email,
          firstname: registerDto.firstname,
          lastname: registerDto.lastname,
          hash: hashedPassword,
          dni: registerDto.dni,
        },
      });

      const user = {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
      };

      return `Student ${user.firstname} ${user.lastname} created successfully`;
    }

    throw new Error('This User already exists, Please create a new one');
  }

  async ProfSignUp(registerDto: RegisterDto) {
    const findUser = await this.prisma.professor.findUnique({
      where: {
        email: registerDto.email,
        dni: registerDto.dni
      },
    });
    if (findUser) throw new Error(`User already registered`);

    if (!findUser) {
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const newUser = await this.prisma.professor.create({
        data: {
          email: registerDto.email,
          firstname: registerDto.firstname,
          lastname: registerDto.lastname,
          hash: hashedPassword,
          dni: registerDto.dni,
        },
      });

      const user = {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
      };

      return `Professor ${user.firstname} ${user.lastname} created successfully`;
    }

    throw new Error('This User already exists, Please create a new one');
  }
}
