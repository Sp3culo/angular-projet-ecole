import { Module } from '@nestjs/common';
import { GeneralKnwoledgeService } from './general-knwoledge.service';
import { GeneralKnwoledgeController } from './general-knwoledge.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {GeneralQuestion} from "./general-question.entity";
import {GeneralResponse} from "./general-response.entity";

@Module({
  imports: [TypeOrmModule.forFeature([GeneralQuestion, GeneralResponse])],
  controllers: [GeneralKnwoledgeController],
  providers: [GeneralKnwoledgeService],
  exports: [GeneralKnwoledgeService],
})

export class GeneralKnwoledgeModule {}

