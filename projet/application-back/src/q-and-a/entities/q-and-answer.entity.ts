import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IAnswer} from "@interface";
import {User} from "../../user/user.entity";
import {QuestionAndA} from "./question-and-a.entity";

@Entity()
export class QAndAnswer implements IAnswer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    message: string;

    @Column({nullable:false})
    created: string;

    @Column()
    updated: string;

    @ManyToOne(() => User, {lazy : true})
    @JoinColumn()
    users: User;

    @ManyToOne(() => QuestionAndA, (question) => question.reponses, {lazy : true})
    @JoinColumn({ name: 'id_response' })
    question: QuestionAndA;

    @Column()
    id_response: number;
}
