import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventoEntity } from '../../entities/evento.entity';

@Injectable()
export class EventoService extends TypeOrmCrudService<EventoEntity> {
  constructor(@InjectRepository(EventoEntity) repo: Repository<EventoEntity>) {
    super(repo)
  }
}
