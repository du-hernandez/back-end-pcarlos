import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud'
import { UsuarioEntity } from '../../entities/usuario.entity'
import { UsuarioService } from './usuario.service'
import { CreateUsuarioDto } from './dto/usuario.dto'

@Crud({
  model: { type: UsuarioEntity },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true
    }
  },
  dto: {
    create: CreateUsuarioDto
  }
})
@Controller('usuario')
export class UsuarioController implements CrudController<UsuarioEntity> {
  constructor(public service: UsuarioService) { }
}
