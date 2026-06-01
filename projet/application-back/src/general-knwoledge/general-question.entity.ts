import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {IGeneralQuestion} from "@interface";
import {GeneralResponse} from "./general-response.entity";
@Entity()
export class GeneralQuestion implements IGeneralQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  label: string;

  @Column({nullable:false})
  created: Date;

  @Column({nullable:true})
  updated: Date;

  @OneToMany(() => GeneralResponse, reponse => reponse.question)
  reponses: GeneralResponse[];
}
