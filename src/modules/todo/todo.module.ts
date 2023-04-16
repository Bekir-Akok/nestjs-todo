import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//local imports
import { Todo, User } from '../../db';
import { TodoService } from './service/todo.service';
import { TodoController } from './controller/todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, User])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
