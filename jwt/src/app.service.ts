import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  getKonst(): string {
    return 'Без токена нельзя';
  }
}
