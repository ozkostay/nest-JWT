import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    root(): string;
    singup(): string;
    login(req: any): Promise<{
        access_token: string;
        user: any;
    }>;
    testtoken(): string;
}
