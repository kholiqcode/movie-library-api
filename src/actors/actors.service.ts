import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Actor } from './actors.model';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';

@Injectable()
export class ActorsService {
  constructor(@InjectModel(Actor) private actorRepo: typeof Actor) {}

  async create(createActorInput: CreateActorInput): Promise<string> {
    const actor: Actor = new Actor();
    actor.name = createActorInput.name;
    actor.birthDate = createActorInput.birthDate;
    await actor.save();
    return 'Actor created successfully';
  }

  findAll(): Promise<Actor[]> {
    return this.actorRepo.findAll();
  }

  findOne(id: number) {
    return this.actorRepo.findOne({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateActorInput: UpdateActorInput,
  ): Promise<string> {
    const actor: Actor = await this.actorRepo.findOne({
      where: { id },
    });
    actor.name = updateActorInput.name;
    actor.birthDate = updateActorInput.birthDate;
    await actor.save();
    return 'Actor updated successfully';
  }

  async remove(id: number): Promise<string> {
    await this.actorRepo.destroy({
      where: {
        id,
      },
    });

    return 'Actor deleted successfully';
  }
}
