import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('')
  root() {
    return 'WWWWWWWWWWWWWWWW';
  }

  @Get('signup')
  singup() {
    return this.authService.singup();

  }
  
  // @Get('signin')
  // singnin() {
  //   return this.authService.test();
  //   //return this.apiService.singin();
  // }

  @Post('signin')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    console.log('API-CONTROLLER=== ', req.user);
    // return req.user;
    return this.authService.login(req.user)
  }
}
