import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {IUser} from "@interface";
import {GeneralResponse} from "../general-knwoledge/general-response.entity";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  username: string;

  @Column({nullable:false})
  password: string;

  @Column({nullable:false})
  birthdate: Date;

  @Column({nullable:false})
  created: Date;

  @Column({ nullable: true })
  updated: Date;

  @Column({ nullable: false, default: 0 })
  score: number;

  @Column({ nullable: false, default: false })
  admin: boolean;

  @ManyToMany(() => GeneralResponse)
  @JoinTable({
    name: 'utilisateur_culture_reponses',
    joinColumn: { name: 'id_utilisateur', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id_reponse', referencedColumnName: 'id' }
  })
  culture_reponses: GeneralResponse[];
}
