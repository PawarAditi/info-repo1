import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { Info } from './info.entity';
import { InfoService } from './info.service';

@Controller('info') //controller is used for accepting http requests from user
export class InfoController {
  constructor(private infoservice: InfoService) {}

  @Get('/:id') //, @GetUser() user: User
  getTaskById(@Param('id') id: string): Promise<Info> {
    return this.infoservice.getTaskById(id);
  }

  @Post('/')
  createInfo(
    @Body() createInfoDto: CreateInfoDto,
    //@GetUser() user: User,
  ): Promise<Info> {
    return this.infoservice.createInfo(createInfoDto);
  }

  @Delete('/:id')
  deleteInfo(@Param('id') id: string): Promise<void> {
    return this.infoservice.deleteInfo(id);
  }

  @Patch('/:id')
  updateInfo(
    @Param('id') id: string,
    @Body() updateInfoDto: UpdateInfoDto,
    // @GetUser() user: User,
  ): Promise<Info> {
    return this.infoservice.updateInfo(id, updateInfoDto);
  }

  @Post('/verify')
  verify(
    @Body() createInfoDto: CreateInfoDto,
    //@GetUser() user: User,
  ): Promise<Info> {
    return this.infoservice.verify(createInfoDto);
  }
}
