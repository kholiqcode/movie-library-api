import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

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
  title: string;

  @Column(DataType.DATEONLY)
  @Field(() => String)
  birthDate: string;

  @Column(DataType.DATE)
  @Field(() => String)
  createdAt: string;

  @Column(DataType.DATE)
  @Field(() => String)
  updatedAt: string;
}
