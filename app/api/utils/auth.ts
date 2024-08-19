import IUser from "../interfaces/userInterface";
import jwt from "jsonwebtoken";

export class Auth{
    static generateToken(user:Partial<IUser>){
        return jwt.sign(user, "SECRET", {expiresIn: "1h"}); 
    }
    static saveLocalStorage(token:string){
        localStorage.setItem("token", token);
    }
}