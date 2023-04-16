import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  Param,
  ParseIntPipe,
  Query
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateTodoDto, UpdateTodoDto } from '../dtos';
import { TodoService } from '../service/todo.service';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('')
  @UsePipes(ValidationPipe)
  async getTodos() {
    return await this.todoService.getTodos();
  }

  @Post('')
  @UsePipes(ValidationPipe)
  async login(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.createTodo(createTodoDto);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async register(@Param('id', ParseIntPipe) id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.todoService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async forgotPassword(@Param('id', ParseIntPipe) id: number) {
    return await this.todoService.deleteTodo(id);
  }
}
