import { Field, Int, ObjectType } from '@nestjs/graphql';
import sequelize from 'sequelize';
import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'actors' })
@ObjectType()
export class Actor extends Model {
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
}
