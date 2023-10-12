import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            email: 'user1@mail.ru',
            password: 'password_1',
            firstName: 'Name1',
            lastName: ' LastName1'
        },
        {
            id: 2,
            email: 'user2@mail.ru',
            password: 'password_2',
            firstName: 'Name2',
            lastName: 'LastName2'
        },
    ];

    // async findOne(username: string): Promise<User | undefined> {
    //     return this.users.find(user => user.username === username);
    // }

    async findOne(payload: any): Promise<User | undefined> {
        console.log('payload from === user service', payload);
        // email and password
        
        return this.users.find(user => {
          if (user.email === payload.email) {
            console.log('users.service === return user', user)
            return user
          } else {
            return null;
          }
        });


    }
}