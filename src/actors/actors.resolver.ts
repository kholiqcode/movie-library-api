import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ActorsService } from './actors.service';
import { Actor } from './actors.model';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';

@Resolver(() => Actor)
export class ActorsResolver {
  constructor(private readonly actorsService: ActorsService) {}

  @Mutation(() => String)
  createActor(@Args('createActorInput') createActorInput: CreateActorInput) {
    return this.actorsService.create(createActorInput);
  }

  @Query(() => [Actor], { name: 'actors' })
  findAll() {
    return this.actorsService.findAll();
  }

  @Query(() => Actor, { name: 'actor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.actorsService.findOne(id);
  }

  @Mutation(() => String)
  updateActor(@Args('updateActorInput') updateActorInput: UpdateActorInput) {
    return this.actorsService.update(updateActorInput.id, updateActorInput);
  }

  @Mutation(() => String)
  removeActor(@Args('id', { type: () => Int }) id: number) {
    return this.actorsService.remove(id);
  }
}
