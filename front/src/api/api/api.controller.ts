import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';

@Controller('api/users')
export class ApiController {

  @Get('/signup')
  signup() {
    return 'SIGN-UP';
  }

  @Get('/signin')
  signin() {
    return 'SIGN-IN';
  }

}
