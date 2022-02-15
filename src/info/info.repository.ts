import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateInfoDto } from './dto/create-info.dto';
import { Info } from './info.entity';
import { City, Education, StateEnum } from './info-state.enum';
import { User } from 'src/auth/user.entity';
import { UpdateInfoDto } from './dto/update-info.dto';
@EntityRepository(Info)
export class InfoRepository extends Repository<Info> {
  async createInfo(createInfoDto: CreateInfoDto): Promise<Info> {
    //, user: User
    const {
      name,
      age,
      pincode,
      state,
      city,
      mobile_number,
      emailid,
      education,
      address1,
      address2,
      address3,
      pan,
      aadharcard,
    } = createInfoDto;

    const info = this.create({
      name,
      age,
      pincode,
      state: StateEnum.MAHARASHTRA,
      city: City.PUNE,
      mobile_number,
      emailid,
      education: Education.BE_IN_COMPUTER,
      address1,
      address2,
      address3,
      pan,
      aadharcard,
      // user,
    });
    // console.log(user);

    await this.save(info);
    return info;
  }

  async updateUserInfo(
    user: Info,
    updateuserinfo: UpdateInfoDto,
  ): Promise<Info> {
    const {
      name,
      age,
      pincode,
      state,
      city,
      education,
      address1,
      address2,
      address3,
    } = updateuserinfo;
    user.name = name;
    user.age = age;
    user.pincode = pincode;
    user.state = state;
    user.city = city;
    user.education = education;
    user.address1 = address1;
    user.address2 = address2;
    user.address3 = address3;

    await this.save(user);
    return user;
  }
}
