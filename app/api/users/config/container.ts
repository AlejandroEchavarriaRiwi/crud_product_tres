import { container } from 'tsyringe';
import {UserModel} from '../models/userModel';
import { UserService } from '../services/userService';

container.registerSingleton<UserModel>(UserModel);
container.registerSingleton<UserService>(UserService);