import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movies.model';

@Module({
  imports: [SequelizeModule.forFeature([Movie])],
  providers: [MoviesResolver, MoviesService],
})
export class MoviesModule {}
