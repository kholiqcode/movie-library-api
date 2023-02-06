import { Field, Int, ObjectType } from '@nestjs/graphql';
import sequelize from 'sequelize';
import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { MovieDetail } from 'src/movie-detail/movie-detail.model';

@Table({ tableName: 'actors' })
@ObjectType()
export class Actor extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  @Field((type) => Int, { nullable: true })
  id?: number;

  @Column
  @Field(() => String, { nullable: true })
  name?: string;

  @Column(DataType.DATEONLY)
  @Field(() => String)
  birthDate: string;

  @Column({
    type: DataType.DATE,
    defaultValue: sequelize.literal('NOW()'),
  })
  @Field(() => String)
  createdAt: string;

  @Column({
    type: DataType.DATE,
    defaultValue: sequelize.literal('NOW()'),
  })
  @Field(() => String)
  updatedAt: string;

  @HasMany(() => MovieDetail)
  @Field(() => MovieDetail, { nullable: true })
  movies: MovieDetail;
}
