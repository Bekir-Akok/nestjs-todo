import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'todo_id'
  })
  id: number;

  @Column({
    nullable: false,
    default: ''
  })
  todo_body: string;

  @OneToOne(type => User)
  @JoinColumn({ name: 'user_id' })
  user_id: User;
}
