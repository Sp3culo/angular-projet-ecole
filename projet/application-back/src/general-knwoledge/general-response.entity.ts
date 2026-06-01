import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {IGeneralResponse} from "@interface";
import {GeneralQuestion} from "./general-question.entity";
@Entity()
export class GeneralResponse implements IGeneralResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  label: string;

  @Column({nullable:false})
  correct: boolean;

  @Column({nullable:false})
  created: Date;

  @Column({nullable:true})
  updated: Date;

  @ManyToOne(() => GeneralQuestion, question => question.reponses)
  question: GeneralQuestion;
}
