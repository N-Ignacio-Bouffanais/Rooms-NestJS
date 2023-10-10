import { IsString } from "class-validator";

export class StudentDto {
  @IsString()
  subjectName: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;
}