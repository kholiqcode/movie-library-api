import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Author } from 'src/authors/authors.model';
import { MovieDetail } from 'src/movie-detail/movie-detail.model';

@Table({ tableName: 'orders' })
@ObjectType()
export class Movie extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  @Field((type) => Int)
  id: number;

  @Column
  @Field(() => String)
  title: string;

  @Column
  @Field(() => String)
  genre: string;

  @Column
  @Field(() => String)
  director: string;

  @Column
  @Field(() => String)
  runtime: string;

  @Column
  @Field(() => Int)
  year: number;

  @Column
  @Field(() => String)
  country: string;

  @Column
  @Field(() => String)
  rating: string;

  @Column
  @Field(() => String)
  votes: string;

  @Column
  @Field(() => String)
  sub: string;

  @Column
  @Field(() => String)
  quality: string;

  @Column(DataType.DATE)
  @Field(() => String)
  createdAt: string;

  @Column(DataType.DATE)
  @Field(() => String)
  updatedAt: string;

  @Column
  @ForeignKey(() => Author)
  @Field(() => Int, { nullable: true })
  authorId: number;

  @BelongsTo(() => Author)
  author: Author;

  @HasMany(() => MovieDetail)
  @Field(() => [MovieDetail], { nullable: true })
  details: MovieDetail[];
}
