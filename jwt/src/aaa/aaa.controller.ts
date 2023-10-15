import { Controller, Get } from '@nestjs/common';

@Controller('aaa')
export class AaaController {

  @Get()
  AaaController() {
    return 'AAA'
  }
  
}
