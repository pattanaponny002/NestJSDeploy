import { User } from './interface/user.interface';
import { Model } from 'mongoose';
export declare class AppService {
    private readonly userModal;
    constructor(userModal: Model<User>);
    getHello(): string;
    PostHello(data: User): Promise<string>;
}
