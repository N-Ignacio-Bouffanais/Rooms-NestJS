import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(loginDto: LoginDto): Promise<any>;
    signUp(registerDto: RegisterDto): Promise<any>;
}
