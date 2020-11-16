import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { PersonaEventoEntity } from '../../entities/personaEvento.entity';
import { PersonaeventoService } from './personaevento.service'
import { PersonaeventoDto } from './dto/personaevento.dto';


@Crud({
  model: { type: PersonaEventoEntity },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true
    }
  },
  dto: {
    create: PersonaeventoDto
  }
})
@Controller('personaevento')
export class PersonaeventoController implements CrudController<PersonaEventoEntity> {
  constructor(public service: PersonaeventoService) { }
}
