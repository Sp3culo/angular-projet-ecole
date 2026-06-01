import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QAndAService } from './q-and-a.service';
import { CreateQAndADto } from './dto/create-q-and-a.dto';
import { UpdateQAndADto } from './dto/update-q-and-a.dto';

@Controller('q-and-a')
export class QAndAController {
  constructor(private readonly qAndAService: QAndAService) {}

  @Post()
  create(@Body() createQAndADto: CreateQAndADto) {
    return this.qAndAService.create(createQAndADto);
  }

  @Get()
  findAll() {
    return this.qAndAService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qAndAService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQAndADto: UpdateQAndADto) {
    return this.qAndAService.update(+id, updateQAndADto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qAndAService.remove(+id);
  }
}
