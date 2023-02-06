import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from './movies.model';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Mutation(() => String)
  createMovie(@Args('createMovieInput') createMovieInput: CreateMovieInput) {
    return this.moviesService.create(createMovieInput);
  }

  @Query(() => [Movie], { name: 'movies' })
  findAll() {
    return this.moviesService.findAll();
  }

  @Query(() => Movie, { name: 'movie' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.moviesService.findOne(id);
  }

  @Mutation(() => String)
  updateMovie(@Args('updateMovieInput') updateMovieInput: UpdateMovieInput) {
    return this.moviesService.update(updateMovieInput.id, updateMovieInput);
  }

  @Mutation(() => String)
  removeMovie(@Args('id', { type: () => Int }) id: number) {
    return this.moviesService.remove(id);
  }
}
