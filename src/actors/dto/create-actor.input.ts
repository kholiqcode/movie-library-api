import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateActorInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  birthDate: string;
}
