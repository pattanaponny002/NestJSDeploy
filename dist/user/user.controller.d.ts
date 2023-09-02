import { UserService } from './user.service';
import { User } from 'src/interface/user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    PostUser(user: User): Promise<void>;
}
