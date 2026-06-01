import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Not, In, Repository} from 'typeorm';
import {GeneralQuestion} from "./general-question.entity";
import {CreateGeneralKnowledgeDto} from "./dto/create-general-knowledge.dto";
import {GeneralResponse} from "./general-response.entity";

@Injectable()
export class GeneralKnwoledgeService {

    constructor(
        @InjectRepository(GeneralQuestion) private generalKnwoledgeQuestionRepository: Repository<GeneralQuestion>,
        @InjectRepository(GeneralResponse) private generalKnwoledgeResponseRepository: Repository<GeneralResponse>,
    ) {}

    async postGeneralKnowledge(createGeneralKnowledge: CreateGeneralKnowledgeDto) {
        try {
            const resultQuestion = await this.generalKnwoledgeQuestionRepository.insert({
                label: createGeneralKnowledge.question,
                created: new Date()
            })

            Object.keys(createGeneralKnowledge.answers).forEach(key  => {
                this.generalKnwoledgeResponseRepository.insert({
                    label: createGeneralKnowledge.answers[key].label,
                    correct: createGeneralKnowledge.answers[key].correct === "yes",
                    created: new Date(),
                    question: resultQuestion.raw.insertId
                })
            });
        } catch (e) {
            console.error("[ERROR] : Créer un nouvelle question " + e)
            return {
                message : "[ERROR] : Créer un nouvelle question",
                success : false,
                error: true
            }

        }
        return {
            message : "[SUCCESS] Nouvelle question créée",
            success : true,
            error: false
        }
    }

    async getGeneralKnowledge() {
        try {
            let results = await this.generalKnwoledgeQuestionRepository
                .find({relations: {reponses: true}});
            return {
                message : "[SUCCESS] Liste des questions récupérée",
                reponse : results,
                error: false
            }
        } catch (e) {
            console.error("[ERROR] : Pendant la récupération des question " + e)
            return {
                message : "[ERROR] : Pendant la récupération des question",
                success : false,
                error: true
            }
        }
    }

    async getOneKnowledge(id: number){
        try {
            let results = await this.generalKnwoledgeQuestionRepository
                .findOne({relations: {reponses: true}, where: {id: id}});
            return {
                message : "[SUCCESS] Liste des questions récupérée",
                reponse : results,
                error: false
            }
        } catch (e) {
            console.error("[ERROR] : Pendant la récupération des question " + e)
            return {
                message : "[ERROR] : Pendant la récupération des question",
                success : false,
                error: true
            }
        }
    }

    async getOneResponse(id: number){
        try {
            let results = await this.generalKnwoledgeResponseRepository
                .findOne({relations: {question: true}, where: {id: id}});
            return {
                message : "[SUCCESS] une reponse récupérée",
                reponse : results,
                error: false
            }
        }catch (e) {
            console.error("[ERROR] : Pendant la récupération d'une reponse: " + e)
            return {
                message: "[ERROR] : Pendant la récupération d'une reponse",
                success: false,
                reponse : null,
                error: true
            }
        }
    }

    async getFilteredQuestions(filteredIds: number[]) {
        try {
            const results = await this.generalKnwoledgeQuestionRepository.find({
                where: { id: Not(In(filteredIds)) },
                relations: ["reponses"]
            });
            return {
                message: "[SUCCESS] Liste des questions filtrée récupérée",
                response: results,
                error: false
            };
        } catch (e) {
            console.error("[ERROR] : Pendant la récupération des questions filtrées " + e);
            return {
                message: "[ERROR] : Pendant la récupération des questions filtrées",
                success: false,
                error: true
            };
        }
    }
}
