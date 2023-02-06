import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Actor } from './actors.model';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';

@Injectable()
export class ActorsService {
  constructor(@InjectModel(Actor) private actorRepo: typeof Actor) {}

  create(createActorInput: CreateActorInput) {
    const actor: Actor = new Actor();
    actor.name = createActorInput.name;
    actor.birthDate = createActorInput.birthDate;
    return actor.save();
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

  async update(id: number, updateActorInput: UpdateActorInput): Promise<Actor> {
    const actor: Actor = await this.actorRepo.findOne({
      where: { id },
    });
    actor.name = updateActorInput.name;
    actor.birthDate = updateActorInput.birthDate;
    return await actor.save();
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
