import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsResolver } from './actors.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Actor } from './actors.model';

@Module({
  imports: [SequelizeModule.forFeature([Actor])],
  providers: [ActorsResolver, ActorsService],
})
export class ActorsModule {}
