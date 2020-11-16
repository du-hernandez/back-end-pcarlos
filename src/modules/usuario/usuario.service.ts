import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UsuarioEntity } from '../../entities/usuario.entity'


@Injectable()
export class UsuarioService extends TypeOrmCrudService<UsuarioEntity> {
  constructor(@InjectRepository(UsuarioEntity) repo: Repository<UsuarioEntity>) {
    super(repo)
  }
}
