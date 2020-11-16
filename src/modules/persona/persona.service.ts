import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaEntity } from '../../entities/persona.entity';


@Injectable()
export class PersonaService extends TypeOrmCrudService<PersonaEntity> {

  constructor(@InjectRepository(PersonaEntity) repo: Repository<PersonaEntity>) {
    super(repo)
  }

}
