import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { EventoEntity } from '../../entities/evento.entity';
import { EventoService } from './evento.service';
import { EventoDto } from './dto/evento.dto';

@Crud({
  model: { type: EventoEntity },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true
    }
  },
  dto: {
    create: EventoDto
  }
})
@Controller('evento')
export class EventoController implements CrudController<EventoEntity> {
  constructor(public service: EventoService) { }
}
