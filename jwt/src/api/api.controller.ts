import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { ApiService } from './api.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/users')
export class ApiController {
  constructor(private readonly apiService: ApiService, private readonly authService: AuthService) {}

  @Get('')
  root() {
    return this.apiService.root();
  }

  @Get('signup')
  singup() {
    return this.apiService.singup();

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
