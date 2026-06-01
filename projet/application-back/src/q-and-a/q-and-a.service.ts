import { Injectable } from '@nestjs/common';
import { CreateQAndADto } from './dto/create-q-and-a.dto';
import { UpdateQAndADto } from './dto/update-q-and-a.dto';

@Injectable()
export class QAndAService {
  create(createQAndADto: CreateQAndADto) {
    return 'This action adds a new qAndA';
  }

  findAll() {
    return `This action returns all qAndA`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qAndA`;
  }

  update(id: number, updateQAndADto: UpdateQAndADto) {
    return `This action updates a #${id} qAndA`;
  }

  remove(id: number) {
    return `This action removes a #${id} qAndA`;
  }
}
