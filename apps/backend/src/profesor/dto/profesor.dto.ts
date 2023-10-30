import { IsString, IsEmail } from "class-validator";

export class ProfesorDto {
  @IsString()
  subjectName: string;
  @IsEmail()
  email: string;
}
