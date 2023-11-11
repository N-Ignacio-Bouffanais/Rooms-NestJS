import { IsString, IsEmail } from "class-validator";

export class ProfessorDto {
  @IsString()
  subjectName: string;
  @IsEmail()
  email: string;
}
