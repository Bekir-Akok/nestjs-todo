import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//local imports
import { User } from '../../db';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
