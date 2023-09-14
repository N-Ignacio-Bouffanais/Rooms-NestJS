import { LoginDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwtService;
    private config;
    constructor(prisma: PrismaService, jwtService: JwtService, config: ConfigService);
    SignIn(loginDto: LoginDto): Promise<{
        user: string;
        email: string;
        role: string;
        token: string;
    }>;
    SignUp(registerDto: RegisterDto): Promise<{}>;
}
