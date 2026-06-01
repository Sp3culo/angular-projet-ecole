import { Module } from '@nestjs/common';
import { QAndAService } from './q-and-a.service';
import { QAndAController } from './q-and-a.controller';

@Module({
  controllers: [QAndAController],
  providers: [QAndAService]
})
export class QAndAModule {}
