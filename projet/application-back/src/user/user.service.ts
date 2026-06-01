import {forwardRef, HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {compare, hash} from "bcrypt";

import { Repository } from 'typeorm';
import { User } from './user.entity';
import {CreateUserDto} from "./dto/create-user.dto";
import {AuthService} from "../auth/auth.service";
import {CreateResponseDto} from "./dto/create-response.dto";
import {GeneralKnwoledgeService} from "../general-knwoledge/general-knwoledge.service";

@Injectable()
export class UserService {
  saltOrRounds: number = 10;
  minutes:  number = 60;
  seconds:  number = 60;
  hours:  number = 24;
  days:  number = 365;
  majority:  number = 18;

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @Inject(GeneralKnwoledgeService)
    private generalKnwoledgeService: GeneralKnwoledgeService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {}

  async createUser(user: CreateUserDto) {
    const today: Date = new Date();

    const dateString: string = user.birthdate;
    const dateObject: Date = new Date(dateString);
    await this.verifyIsMinorOrMajor(today, dateObject);

    if (user.password.length <= 6) {
      throw new HttpException('Votre mot de passe est trop petit … 📏 (min. 6 caractères)', HttpStatus.UNAUTHORIZED);
    }

    const hashPassword: string = await this.getHash(user.password);

    return this.userRepository.insert({
      username: user.username,
      password: hashPassword,
      birthdate: dateObject,
      created: today,
    });
  }

  async getUser(login: string, password: string): Promise<User> {
    const hashPwd: string = await this.getHash(password)

    return this.userRepository.findOne({
      where: { username: login },
    });
  }

  async getUserById(id: number): Promise<User> {
    console.log(id)
    return await this.userRepository.findOne({
      relations : {
        culture_reponses: true
      },
      where: {id: id},
    });
  }

  async getAllUsers(): Promise<any> {
    const results =  await this.userRepository.find();

    results.map(result => {
      delete result.password;
      delete result.created
      delete result.updated
    })

    try {
      return {
        message : "[SUCCESS] Getting all users",
        reponse : results,
        code : 200,
        error: false
      }
    } catch (e) {
      console.log("ERROR GET ALL USERS ", e)
      return {
        message : "[ERROR] Getting all users",
        reponse : null,
        code : 400,
        error: false
      }
    }
  }

  async deleteUser(token : string) {
    try {
      const id = await this.authService.getTokenInformation(token);
      await this.userRepository.delete(id);

      return {
        message : "[SUCCESS] Compte de l'utilisateur correctement supprimé",
        reponse : null,
        code : 200,
        error: false
      }
    } catch (e) {
      console.error("[ERROR] : Pendant la suppression de l'utilisateur " + e)
      return {
        message : "[ERROR] : Pendant la suppression de l'utilisateur",
        success : false,
        code : 400,
        error: true
      }
    }
  }

  async deleteUserById(id: number) {
    try {
      await this.userRepository.delete(id);

      return {
        message : "[SUCCESS] Compte de l'utilisateur correctement supprimé",
        reponse : null,
        code : 200,
        error: false
      }
    } catch (e) {
      console.error("[ERROR] : Pendant la suppression de l'utilisateur " + e)
      return {
        message : "[ERROR] : Pendant la suppression de l'utilisateur",
        success : false,
        code : 400,
        error: true
      }
    }
  }

  async updateAdmiRightByUserId(id: number) {
    try {
      const user = await this.getUserById(id);

      if (user) {
        user.admin = !user.admin;
        user.updated = new Date();
        return this.userRepository.save(user);
      }

      return {
        message : "[SUCCESS] L'utilisateur a changé de status (admin)",
        reponse : null,
        code : 200,
        error: false
      }
    } catch (e) {
      console.error("[ERROR] : Pendant le changement de status admin de l'utilisateur " + e)
      return {
        message : "[ERROR] : Pendant le changement de status admin de l'utilisateur",
        success : false,
        code : 400,
        error: true
      }
    }
  }

  async verifyIsMinorOrMajor(today: Date, birthdate: Date): Promise<void> {
    const todayTime: number = today.getTime();
    const birthdateTime: number = birthdate.getTime();

    let dateDiff: number = (todayTime - birthdateTime) / 1_000;
    dateDiff = dateDiff / (this.seconds * this.minutes * this.hours)
    dateDiff = Math.abs(Math.round(dateDiff/this.days));

    if (dateDiff < this.majority) {
      throw new HttpException('Vous ne pouvez pas vous inscrire 🐣', HttpStatus.UNAUTHORIZED);
    }
  }

  async getHash(password: string): Promise<string> {
    return await hash(password, this.saltOrRounds)
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await compare(password, hash);
  }

  async getUserResponseList(token : string){
    try {
      const id = await this.authService.getTokenInformation(token);
      return await this.userRepository.find({relations: {culture_reponses: true}, where: {id: id}});
    }catch (e){
      console.log(e);
    }
  }

  async addResponse(userResponse: CreateResponseDto) {
    try {
      const idUser: number = userResponse.idUser;
      const idResponse: number = userResponse.idResponse;

      let user = await this.getUserById(idUser);

      if (user) {
        const reponse = await this.generalKnwoledgeService.getOneResponse(idResponse);


        if (reponse.reponse !== null) {
          user.culture_reponses.push(reponse.reponse);
        }
      }

      await this.userRepository.save(user);

      return {
        message : "[SUCCESS] Réponse bien enregistrée",
        reponse : null,
        code : 200,
        error: false
      }
    } catch (e) {
       return {
         message : "[ERROR] : la réponse de l'utilisateur n'a pas pu être sauvegardée : " + e,
         success : false,
         code : 400,
         error: true
       }
    }
  }
}
