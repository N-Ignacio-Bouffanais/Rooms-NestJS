import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() loginDto: LoginDto): Promise<any> {
    return this.authService.SignIn(loginDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async signUp(@Body() registerDto: RegisterDto): Promise<any> {
    try {
      const newUser = await this.authService.SignUp(registerDto);
      return { message: 'Usuario creado con éxito', user: newUser };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
