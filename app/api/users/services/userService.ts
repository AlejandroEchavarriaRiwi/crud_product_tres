import { inject, injectable } from "tsyringe";
import IUser from "../interfaces/userInterface";
import {UserModel} from "../models/userModel";

@injectable()
export class UserService{
    constructor(@inject(UserModel) private userModel:UserModel){}

    async getUsers(): Promise<IUser[]>{
        return await this.userModel.getUsers();
    }
    async getUserById(user_id:number): Promise<IUser[]>{
        return await this.userModel.getUserById(user_id);
    }
}