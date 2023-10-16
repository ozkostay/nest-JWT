import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    root(): string;
    register(body: any): Promise<{
        statusCode: number;
        message: string;
        access_token?: undefined;
        user?: undefined;
    } | {
        access_token: string;
        user: any;
        statusCode?: undefined;
        message?: undefined;
    }>;
    login(req: any): Promise<{
        access_token: string;
        user: any;
    }>;
    testtoken(): {
        statusCode: number;
        message: string;
    };
}
