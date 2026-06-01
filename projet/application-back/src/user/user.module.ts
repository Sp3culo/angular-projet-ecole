import {forwardRef, Module} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import {AuthModule} from "../auth/auth.module";
import {GeneralKnwoledgeModule} from "../general-knwoledge/general-knwoledge.module";

@Module({
  imports: [forwardRef(() => AuthModule), GeneralKnwoledgeModule, TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
