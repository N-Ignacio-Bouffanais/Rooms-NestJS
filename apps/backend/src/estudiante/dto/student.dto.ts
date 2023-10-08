import { IsString } from "class-validator";

export class StudentDto {
  @IsString()
  subject: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;
}