import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateActorInput {
  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  birthDate: string;
}
