import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ApiModule } from './api/api.module';
import { AuthController } from './auth/auth.controller';
import { AaaModule } from './aaa/aaa.module';

@Module({
  imports: [UsersModule, AuthModule, AaaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
