import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoModule } from './info/info.module';

@Module({
  imports: [
    InfoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'axis-bank',
      autoLoadEntities: true,
      synchronize: true, //database schema in sync
    }),
  ],
})
export class AppModule {}
