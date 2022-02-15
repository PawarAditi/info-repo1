import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Info {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  pincode: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  mobile_number: string;

  @Column()
  emailid: string;

  @Column()
  education: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  address3: string;

  @Column()
  pan: string;

  @Column()
  aadharcard: string;


  // @ManyToOne((_type) => User, (user) => user.info, { eager: false })
  // @Exclude({ toPlainOnly: true })
  // user: User;
}
