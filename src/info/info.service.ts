import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateInfoDto } from './dto/create-info.dto';
import { GetTasksFilterDto } from './dto/get-info-filter';
import { UpdateInfoDto } from './dto/update-info.dto';
import { Info } from './info.entity';
import { InfoRepository } from './info.repository';
/* Services will hold the operation which can be used through out the application*/
@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(InfoRepository)
    private infoRepository: InfoRepository,
  ) {}
  // getTasks(filterDto: GetTasksFilterDto): Promise<Info[]> {
  //   return this.infoRepository.getTasks(filterDto);
  // }
  async getTaskById(id: string): Promise<Info> {
    const found = await this.infoRepository.findOne({ id });
    if (!found) {
      throw new NotFoundException(`Info with ID "${id}" not found`);
    }
    return found;
  }

  createInfo(createTaskDto: CreateInfoDto): Promise<Info> {
    return this.infoRepository.createInfo(createTaskDto);
  }

  async deleteInfo(id: string): Promise<void> {
    // const found = await this.getTaskById(id);
    //console.log(found);
    //var result;
    //if (found) {
    const result = await this.infoRepository.delete({ id });
    //}
    if (result.affected === 0) {
      throw new NotFoundException(`Info with ID "${id}" not found`);
    }
    console.log(result);
  }

  async updateInfo(id: string, updateUserInfo: UpdateInfoDto): Promise<Info> {
    const users = await this.getTaskById(id);
    return this.infoRepository.updateUserInfo(users, updateUserInfo);
  }

  verify(createTaskDto: CreateInfoDto): Promise<any> {
    return Promise.resolve({ status: 'code' });
  }
}
