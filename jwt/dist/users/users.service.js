"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor() {
        this.users = [
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
    }
    async findOne(email) {
        console.log('USER-SERVICE ===', email);
        return this.users.find(user => user.email === email);
    }
    async addUser(payload) {
        const { email, password, firstName, lastName } = payload;
        const user = await this.findOne(email);
        if (!user) {
            const newUser = {
                userId: (0, uuid_1.v4)(),
                email,
                password,
                firstName,
                lastName,
            };
            this.users.push(newUser);
            console.log(this.users);
            return newUser;
        }
        else {
            return user;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map