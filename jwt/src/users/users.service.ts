import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
            email: 'john@pp.ru',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
            email: 'maria@pp.ru',
        },
    ];

    async findOne(email: string): Promise<User | undefined> {
      console.log('USER-SERVICE ===', email);
      return this.users.find(user => user.email === email);
    }

    async addUser(payload) {
        // вытаскиваем константиы
        // проверяем наличие email в базе
        // если нет, создаем user = объект
        // вставляем в массив users
        // получаем токен по user
        // возвращаем объент
        //  {
        //     access_token: this.jwtService.sign(payload),
        //     user
        //  }
        return 'ok'
    }
   
}