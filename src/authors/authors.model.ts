import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Movie } from 'src/movies/movies.model';

@Table({ tableName: 'authors' })
@ObjectType()
export class Author extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  @Field((type) => Int)
  id: number;

  @Column
  @Field(() => String)
  name: string;

  @Column(DataType.DATEONLY)
  @Field(() => String)
  birthDate: string;

  @Column(DataType.DATE)
  @Field(() => String)
  createdAt: string;

  @Column(DataType.DATE)
  @Field(() => String)
  updatedAt: string;

  @HasMany(() => Movie)
  @Field(() => Movie, { nullable: true })
  movies: Movie;
}
