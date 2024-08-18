import { inject, injectable } from "tsyringe";
import { RoleModel } from "../models/roleModel";
import IRole from "../interfaces/roleInterface";

@injectable()
export class RoleService{
    constructor(@inject(RoleModel) private roleModel: RoleModel){}

    async getUser():Promise<IRole[]>{
        return await this.roleModel.getUsers();
    }
    async getUserById(role_id:number):Promise<IRole[]>{
        return await this.roleModel.getUserById(role_id);
    }
    async createRole(role: Partial<IRole>):Promise<IRole[]>{
        return await this.roleModel.createRole(role);
    }
    async updateRole(role_id:number, newRole: Partial<IRole>):Promise<void>{
        return await this.roleModel.updateRole(role_id,newRole);
    }
    async deleteRole(role_id:number): Promise<void>{
        return await this.roleModel.deleteRole(role_id);
    }

}