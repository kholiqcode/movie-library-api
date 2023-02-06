import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { Movie } from './movies.model';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie) private movieRepo: typeof Movie) {}

  async create(createMovieInput: CreateMovieInput) {
    const movie: Movie = new Movie();
    movie.title = createMovieInput.title;
    movie.year = createMovieInput.year;
    movie.genre = createMovieInput.genre.join(', ');
    movie.director = createMovieInput.director;
    movie.runtime = createMovieInput.runtime;
    movie.country = createMovieInput.country;
    movie.rating = createMovieInput.rating;
    movie.votes = createMovieInput.votes;
    movie.sub = createMovieInput.sub;
    movie.quality = createMovieInput.quality;
    movie.authorId = createMovieInput.authorId;
    await movie.save();
    return 'Movie created successfully';
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieRepo.findAll();
  }

  async findOne(id: number): Promise<Movie> {
    return await this.movieRepo.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateMovieInput: UpdateMovieInput) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
