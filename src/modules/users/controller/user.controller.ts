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
  ParseIntPipe
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserDto, UpdateUserDto } from '../dtos';
import { UserService } from '../service/user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  @UsePipes(ValidationPipe)
  async getTodos() {
    return await this.userService.findAll();
  }

  @Post('')
  @UsePipes(ValidationPipe)
  async login(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async register(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.updateOne(id, updateUserDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async forgotPassword(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.delete(id);
  }
}
