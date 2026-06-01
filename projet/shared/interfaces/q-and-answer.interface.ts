import {IUser} from "./user.interface";
import {IQuestion} from "./question-and-a.interface";

export interface IAnswer {
    id : number;
    message : string;
    users: IUser;
    question: IQuestion
}