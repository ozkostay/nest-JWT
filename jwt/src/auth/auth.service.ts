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
        console.log('AUT-SERVICE=== ', email, pass);
        const user = await this.usersService.findOne(email);
        if (user && user.password === pass) {
            // console.log('AUT-SERVICE===2 ', user);
            const { password, ...result } = user;
            // console.log('AUT-SERVICE===2 ', result);
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return  {
                    access_token: this.jwtService.sign(payload),
                    user
                };
    }

    createToken(payload: any) {
        console.log('payload2', payload);
        return this.jwtService.sign(payload);
    }

    root() {
        return ('AUTH root')
      }
    
    singup() {
        return ('AUTH singup')
    }

    singin() {
        return ('AUTH singin')
    }
   
}