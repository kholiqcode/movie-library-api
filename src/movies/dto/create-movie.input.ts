import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field(() => String)
  title: string;

  @Field(() => [String])
  genre: string[];

  @Field(() => String)
  director: string;

  @Field(() => String)
  runtime: string;

  @Field(() => Int)
  year: number;

  @Field(() => String)
  country: string;

  @Field(() => String)
  rating: string;

  @Field(() => String)
  votes: string;

  @Field(() => String)
  sub: string;

  @Field(() => String)
  quality: string;

  @Field(() => Int)
  authorId: number;
}
