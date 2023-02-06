import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MovieDetail } from './movie-detail.model';

@Module({
  imports: [SequelizeModule.forFeature([MovieDetail])],
})
export class MovieDetailModule {}
