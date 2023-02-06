import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'orders' })
@ObjectType()
export class Order extends Model {
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

  @Column
  @Field(() => String, { nullable: true })
  createdAt: string;

  @Column
  @Field(() => String)
  updatedAt: string;
}
