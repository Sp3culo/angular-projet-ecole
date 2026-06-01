import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IQuestion} from "@interface";
import {User} from "../../user/user.entity";
import {QAndAnswer} from "./q-and-answer.entity";

@Entity()
export class QuestionAndA implements IQuestion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    label: string;

    @Column({nullable:false})
    created: string;

    @Column()
    updated: string;

    @ManyToOne(() => User, {lazy : true} )
    @JoinColumn({ name: 'id_user' })
    user: User;

    @Column()
    id_user : number;

    @OneToMany(() => QAndAnswer, (reponse) => reponse.question)
    @JoinColumn()
    reponses: QAndAnswer[];

}
