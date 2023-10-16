import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt.auth.guard';

@Controller('api/users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('')
  root() {
    return 'WWWWWWWWWWWWWWWW';
  }

  @Post('signup')
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

  @UseGuards(JwtAuthGuard)
  @Get('testtoken')
  testtoken() {
    return this.authService.testtoken()
  }
}
