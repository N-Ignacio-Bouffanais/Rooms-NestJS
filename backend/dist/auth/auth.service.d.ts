import { LoginDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    SignIn(loginDto: LoginDto): Promise<void>;
    SignUp(registerDto: RegisterDto): Promise<{}>;
}
