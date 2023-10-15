import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {

  root() {
    return ('API root')
  }

  singup() {
    return ('API singup')
  }

  singin() {
    return ('API singin')
  }


}
