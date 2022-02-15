import { type } from 'os';
import { Info } from 'src/info/info.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // @OneToMany((_type) => Info, (info) => info.user, { eager: true })
  // info: Info[];
}
