import { UserService } from './user.service';
import { User } from 'src/interface/user.interface';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    PostUser(user: User, response: Response): Promise<void>;
}
