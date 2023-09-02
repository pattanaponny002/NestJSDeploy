import { AppService } from './app.service';
import { User } from './interface/user.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    PostHello(data: User): Promise<string>;
}
