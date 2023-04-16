import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    name: 'user_id',
    type: 'bigint'
  })
  id: number;

  @Column({
    name: 'username',
    nullable: false,
    default: ''
  })
  username: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
    unique: true
  })
  email: string;
}