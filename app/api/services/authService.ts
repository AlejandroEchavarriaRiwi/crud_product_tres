import IUser from "../interfaces/userInterface";
import { inject, injectable } from "tsyringe";
import { UserModel } from "../models/userModel";
import { Auth } from "../utils/auth";
@injectable()
export class AuthService{
    constructor(@inject(UserModel) private userModel: UserModel){}

    async loginUser(email:string, password:string):Promise<IUser | undefined>{
        return await this.userModel.getUserByEmailPassword({email,password});
    }
    async registerUser(user:Partial<IUser>):Promise<void>{
        const {email,password,role_id} = user;
        const userFound = await this.userModel.getUserByEmail(email!);
        if(!userFound){
            await this.userModel.createUser({email,password,role_id});
        }
    }
}