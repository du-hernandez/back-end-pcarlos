import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud'
import { PersonaEntity } from '../../entities/persona.entity'
import { PersonaService } from './persona.service'
import { CreatePersonaDto } from './dto/persona.dto'

@Crud({
  model: { type: PersonaEntity },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true
    }
  },
  dto: {
    create: CreatePersonaDto
  }
})
@Controller('persona')
export class PersonaController implements CrudController<PersonaEntity> {
  constructor(public service: PersonaService) { }
}
