import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Actor } from './actors.model';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';

@Injectable()
export class ActorsService {
  constructor(@InjectModel(Actor) private actorRepo: typeof Actor) {}

  create(createActorInput: CreateActorInput) {
    return 'This action adds a new actor';
  }

  findAll(): Promise<Actor[]> {
    return this.actorRepo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  update(id: number, updateActorInput: UpdateActorInput) {
    return `This action updates a #${id} actor`;
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
