import { IsEmail, IsString } from "class-validator";

export class StudentDto {
  @IsString()
  subjectName: string;

  @IsEmail()
  email: string;
}