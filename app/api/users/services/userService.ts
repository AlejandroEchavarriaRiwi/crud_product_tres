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
    async createUser(user:Partial<IUser>):Promise<IUser[]>{
        return await this.userModel.createUser(user);
    }
    async updateUser(user_id:number, newUser: Partial<IUser>):Promise<void>{
        await this.userModel.updateUser(user_id, newUser);
    }
    async deleteUser(user_id:number):Promise<void>{
        await this.userModel.deleteUser(user_id);
    }
}