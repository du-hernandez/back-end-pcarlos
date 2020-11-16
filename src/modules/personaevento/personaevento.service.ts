import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaEventoEntity } from '../../entities/personaEvento.entity';

@Injectable()
export class PersonaeventoService extends TypeOrmCrudService<PersonaEventoEntity> {
  constructor(@InjectRepository(PersonaEventoEntity) repo: Repository<PersonaEventoEntity>) {
    super(repo)
  }
}
