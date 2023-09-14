"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(prisma, jwtService, config) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.config = config;
    }
    async SignIn(loginDto) {
        const findUser = await this.prisma.user.findUnique({
            where: {
                email: loginDto.email,
            },
        });
        if (!findUser)
            throw new common_1.HttpException('User not found', 404);
        const checkPassword = await bcrypt.compare(loginDto.password, findUser.hash);
        if (!checkPassword)
            throw new common_1.HttpException('Contraseña incorrecta', 403);
        const payload = { id: findUser.id, username: findUser.username };
        const token = this.jwtService.sign(payload, {
            secret: this.config.get('SECRET_KEY'),
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
    async SignUp(registerDto) {
        const findUser = await this.prisma.user.findUnique({
            where: {
                email: registerDto.email,
            },
        });
        if (!findUser) {
            const hashedPassword = await bcrypt.hash(registerDto.password, 10);
            const newUser = await this.prisma.user.create({
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
            };
            return user;
        }
        throw new Error('Ya existe un usuario con este correo, Por favor intente con otro');
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map