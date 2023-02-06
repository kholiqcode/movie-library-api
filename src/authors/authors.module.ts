import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from './authors.model';

@Module({
  imports: [SequelizeModule.forFeature([Author])],
  providers: [AuthorsResolver, AuthorsService],
})
export class AuthorsModule {}
