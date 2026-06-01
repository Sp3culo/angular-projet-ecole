import {IUser} from "./user.interface";

export interface IQuestion {
    id : number;
    user: IUser
    label : string;
}