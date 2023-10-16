import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: '1',
            email: 'john@pp.ru',
            password: 'changeme',
            firstName: 'john',
            lastName: 'aaaaaaa',
        },
        {
            userId: '2',
            email: 'maria@pp.ru',
            password: 'guess',
            firstName: 'maria',
            lastName: 'bbbbbbb',
        },
    ];

    async findOne(email: string): Promise<User | undefined> {
      console.log('USER-SERVICE ===', email);
      return this.users.find(user => user.email === email);
    }

    async addUser(payload) : Promise<User | undefined>{
        const { email, password, firstName, lastName } = payload;
        // проверяем наличие email в базе
        // console.log('=== UsSer == email', email);
        const user = await this.findOne(email);
        // console.log('=== UsSer == user', user);
        if (!user) {
            // типизировать!!!!!!!!!!!!!!!!!!!!!!!
            const newUser = {
                userId: uuidv4(),
                email,
                password,
                firstName,
                lastName,
            }
            this.users.push(newUser);
            console.log(this.users);
            return newUser;
        } else {
            return user;
        }
    }
   
}