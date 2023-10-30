import { IsString, IsEmail } from "class-validator";

export class ProfesorDto {
  @IsString()
  subject: string;
  @IsEmail()
  email: string;
}
