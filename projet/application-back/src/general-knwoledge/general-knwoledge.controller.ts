import {Body, Controller, Get, Post, UseGuards, Param, Query} from '@nestjs/common';
import {GeneralKnwoledgeService} from "./general-knwoledge.service";
import { CreateGeneralKnowledgeDto } from './dto/create-general-knowledge.dto';
import {AuthGuard} from "@nestjs/passport";

@Controller('general-knwoledge')
export class GeneralKnwoledgeController {

    constructor(private readonly knowledgeService: GeneralKnwoledgeService) {}

    @Get("response/:id")
    async getOneResponse(@Param('id') id: number): Promise<{ message: string}> {
        return this.knowledgeService.getOneResponse(id);
    }

    @Get("filtered")
    async getFilteredQuestions(@Query('exclude') exclude: string): Promise<{ message: string }> {
        const filteredIds = exclude.split(',').map(id => parseInt(id));
        return this.knowledgeService.getFilteredQuestions(filteredIds);
    }

    @Get("/:id")
    async getOneQuestion(@Param('id') id: number): Promise<{ message: string }> {
        return this.knowledgeService.getOneKnowledge(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createQuestion(@Body() createGeneralKnowledge: CreateGeneralKnowledgeDto): Promise<{ message: string }> {
        return this.knowledgeService.postGeneralKnowledge(createGeneralKnowledge)
    }


    @Get()
    async getQuestions(): Promise<{ message: string }> {
        return this.knowledgeService.getGeneralKnowledge();
    }

}
