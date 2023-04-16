import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//local imports
import { BaseService } from '../../../base';
import { Todo, User } from '../../../db';
import { CreateTodoDto, UpdateTodoDto } from '../dtos';

@Injectable()
export class TodoService extends BaseService<Todo> {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    super(todoRepository);
  }

  async getTodos() {
    const todos = await this.findAll();

    return new HttpException({ msg: 'get todos succesfuly', todos }, HttpStatus.OK);
  }

  async createTodo(createTodoDto: CreateTodoDto) {
    const { user_id } = createTodoDto;

    const user = await this.userRepository.findOneBy({
      id: user_id
    });

    if (!user) return this.badRequest('User doesnt exist.', HttpStatus.BAD_REQUEST);

    const newTodo = await this.create(createTodoDto);

    return new HttpException({ msg: 'Todo created successfuly', newTodo }, HttpStatus.CREATED);
  }

  async updateTodo(id: number, updateDto: UpdateTodoDto) {
    const todo = await this.find({ id });

    if (!todo) this.badRequest('Todo doesnt exist.', HttpStatus.BAD_REQUEST);

    await this.updateOne(id, updateDto);

    return new HttpException({ msg: 'todo update succesfuly' }, HttpStatus.OK);
  }

  async deleteTodo(id: number) {
    const todo = await this.find({ id });

    if (!todo) this.badRequest('Todo doesnt exist.', HttpStatus.BAD_REQUEST);

    await this.delete(id);

    return new HttpException({ msg: 'Todo deleted successfuly' }, HttpStatus.OK);
  }
}
