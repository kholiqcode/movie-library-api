import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from './authors.model';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author) private authorRepo: typeof Author) {}

  async create(createAuthorInput: CreateAuthorInput): Promise<string> {
    const author: Author = new Author();
    author.name = createAuthorInput.name;
    author.birthDate = createAuthorInput.birthDate;
    await author.save();
    return 'Author created successfully';
  }

  findAll(): Promise<Author[]> {
    return this.authorRepo.findAll();
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepo.findOne({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateAuthorInput: UpdateAuthorInput,
  ): Promise<string> {
    const author: Author = await this.authorRepo.findOne({
      where: { id },
    });
    author.name = updateAuthorInput.name;
    author.birthDate = updateAuthorInput.birthDate;
    await author.save();
    return 'Author updated successfully';
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
