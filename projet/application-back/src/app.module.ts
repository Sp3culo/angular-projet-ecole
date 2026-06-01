import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbProperties } from './properties/db.properties';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GeneralKnwoledgeModule } from './general-knwoledge/general-knwoledge.module';
import { QAndAModule } from './q-and-a/q-and-a.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({ ...dbProperties }),
    UserModule,
    AuthModule,
    GeneralKnwoledgeModule,
    QAndAModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
