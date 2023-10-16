import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('')
  root() {
    return 'WWWWWWWWWWWWWWWW';
  }

  // @Post('signup')
  // singup() {
  //   const temp = { email: "maria2@pp.ru", password: "123", firstName: "Konst", lastName: "Oz" }
  //   return this.authService.register(temp);
  // }

  @Post('signup')
  // @UseGuards(AuthGuard('local'))
  // async register(@Request() req) {
    async register(@Body() body: any) {
    console.log('API-CONTROLLER register === ', body);
    return this.authService.register(body)
  }

  @Post('signin')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    console.log('API-CONTROLLER=== ', req.user);
    return this.authService.login(req.user)
  }

  @Get('testtoken')
  testtoken() {
    return this.authService.testtoken()
  }
}
