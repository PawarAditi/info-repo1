import { IsNotEmpty } from 'class-validator';

export class UpdateInfoDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  pincode: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  mobile_number: string;

  @IsNotEmpty()
  education: string;

  @IsNotEmpty()
  address1: string;

  address2: string;

  address3: string;
}
