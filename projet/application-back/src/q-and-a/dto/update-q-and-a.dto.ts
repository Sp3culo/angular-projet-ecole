import { PartialType } from '@nestjs/mapped-types';
import { CreateQAndADto } from './create-q-and-a.dto';

export class UpdateQAndADto extends PartialType(CreateQAndADto) {}
