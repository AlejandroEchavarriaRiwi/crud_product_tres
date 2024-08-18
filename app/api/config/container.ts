import { container } from 'tsyringe';
import {UserModel} from '../models/userModel';
import { UserService } from '../services/userService';
import { RoleModel } from '../models/roleModel';
import { RoleService } from '../services/roleService';
import { AuthService } from '../services/authService';

container.registerSingleton<UserModel>(UserModel);
container.registerSingleton<UserService>(UserService);
container.registerSingleton<RoleModel>(RoleModel);
container.registerSingleton<RoleService>(RoleService);
container.registerSingleton<AuthService>(AuthService);