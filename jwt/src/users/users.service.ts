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
   
}