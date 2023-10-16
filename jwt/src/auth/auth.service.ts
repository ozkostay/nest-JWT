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
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { firstName: user.firstName, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async register(userNew: any) {
    const user = await this.usersService.addUser(userNew);
    if (!user) {
      return { statusCode: 401, message: 'Пользователь с таким именем уже есть!!!'}
    }

    const payload = { firstName: user.firstName, sub: user.userId };
    const { password, ...result } = user;
    return {
      access_token: this.jwtService.sign(payload),
      user: result,
    };
  }

  createToken(payload: any) {
    console.log('payload2', payload);
    return this.jwtService.sign(payload);
  }

  testtoken() {
    return { statusCode: 200, message: 'Успешный доступ к закрытой странице'};
  }
}
