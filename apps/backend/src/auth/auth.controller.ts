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
  @Post('student/login')
  async StuSignIn(@Body() loginDto: LoginDto): Promise<any> {
    try {
      return this.authService.StuSignIn(loginDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('profesor/login')
  async ProfSignIn(@Body() loginDto: LoginDto): Promise<any> {
    try {
      return this.authService.ProfSignIn(loginDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('student/register')
  async StuSignUp(@Body() registerDto: RegisterDto): Promise<any> {
    try {
      const newUser = await this.authService.StuSignUp(registerDto);
      return { message: 'Estudiante creado con éxito', user: newUser };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('profesor/register')
  async ProfSignUp(@Body() ProfregisterDto: RegisterDto): Promise<any> {
    try {
      const newUser = await this.authService.ProfSignUp(ProfregisterDto);
      return { message: 'Profesor creado con éxito', user: newUser };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post('admin/login')
  async AdminSignUp(@Body() adminDto: LoginDto ): Promise<any> {
    try {
      return 
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
