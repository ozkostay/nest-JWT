import { Body, Controller, Request, Get, Post, Render } from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import fetch from 'node-fetch';

@Controller('api/users')
export class ApiController {

  @Get('/signup')
  signup() {
    return 'SIGN-UP';
  }


  @Get('/signin')
  @Render('signin')
  signin() {
    return { mess: 'DDDDDDDDDDDDDDDDDDDDDD'};
  }

  @Post('/testtoken')
  @FormDataRequest()
  @Render('testtoken')
  testtoken(@Body() body: { email: string, password: string }) {
    const { email, password } = body;
    fetch(
      'localhost:3000/login',
      {headers: {Authentication: 'Bearer Token'}}
    )
    .then(resp => resp.json())
    .then(json => console.log('JSON===== ', JSON.stringify(json)))
    
    return { message: ` ${email} ${password}` };
  }

  // async login(@Request() req) {
  //   console.log('Login', req );
  //   return req.user;
  // }

}
