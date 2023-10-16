import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        user: any;
    }>;
    register(userNew: any): Promise<{
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
    createToken(payload: any): string;
    testtoken(): {
        statusCode: number;
        message: string;
    };
}
