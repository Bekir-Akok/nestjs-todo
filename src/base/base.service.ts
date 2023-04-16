import { BadGatewayException, HttpException } from '@nestjs/common';
import { Repository, FindOneOptions } from 'typeorm';

//local imports
import { Enums } from '../typings';

export class BaseService<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  badRequest(msg: string, status: Enums.HttpStatus) {
    throw new HttpException({ msg }, status);
  }

  find(filter: any) {
    try {
      return this.genericRepository.findOne({ where: filter } as FindOneOptions<T>);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async findAll() {
    try {
      return await this.genericRepository.find();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  create(entity: any): Promise<number> {
    try {
      return this.genericRepository.save(entity);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  updateOne(id: number, entity: any): Promise<any> {
    try {
      return this.genericRepository.update(id, entity);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  delete(id: number) {
    try {
      return this.genericRepository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
