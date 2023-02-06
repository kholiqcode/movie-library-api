import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Actor } from 'src/actors/actors.model';
import { Movie } from 'src/movies/movies.model';

@Table({ tableName: 'movie_details' })
@ObjectType()
export class MovieDetail extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  @Field((type) => Int)
  id: number;

  @Column
  @ForeignKey(() => Movie)
  @Field(() => Int, { nullable: true })
  movieId: number;

  @Column
  @ForeignKey(() => Actor)
  @Field(() => Int, { nullable: true })
  actorId: number;

  @BelongsTo(() => Movie)
  movie: Movie;

  @BelongsTo(() => Actor)
  @Field(() => Actor)
  actor: Actor;
}
