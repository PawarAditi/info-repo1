import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/auth/auth.controller';
import { AuthModule } from 'src/auth/auth.module';
import { InfoController } from './info.controller';
import { InfoRepository } from './info.repository';
import { InfoService } from './info.service';

@Module({
  imports: [TypeOrmModule.forFeature([InfoRepository]), AuthModule], //dependency injection for sub roots use forfeature

  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
