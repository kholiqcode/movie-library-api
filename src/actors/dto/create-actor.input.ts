import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateActorInput {
  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  birthDate: string;
}
