import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesorDto } from './create-profesor.dto';

export class UpdateProfesorDto extends PartialType(CreateProfesorDto) {}
