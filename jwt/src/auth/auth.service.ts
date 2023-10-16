import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService, 
        private jwtService: JwtService,
        ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        // console.log('AUT-SERVICE=== ', email, pass);
        const user = await this.usersService.findOne(email);
        console.log('DDD1', user);
        if (user && user.password === pass) {
            console.log('DDD2', user);
            const { password, ...result } = user;
            console.log('DDD res', result);
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { firstName: user.firstName, sub: user.userId };
        return  {
                    access_token: this.jwtService.sign(payload),
                    user
                };
    }

    async register(userNew: any) {
        console.log('ARGS', userNew)
        const user = await this.usersService.addUser(userNew);
        const payload = { firstName: user.firstName, sub: user.userId };
        const { password, ...result } = user;
        return {
            access_token: this.jwtService.sign(payload),
            user: result
        };
    }













    createToken(payload: any) {
        console.log('payload2', payload);
        return this.jwtService.sign(payload);
    }

    // root() {
    //     return ('AUTH root')
    //   }
    
    testtoken() {
        return ('AUTH testtoken')
    }
   
}