import { Module } from '@nestjs/common';
import { PersonaeventoController } from './personaevento.controller';
import { PersonaeventoService } from './personaevento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaEventoEntity } from '../../entities/personaEvento.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonaEventoEntity])
  ],
  controllers: [PersonaeventoController],
  providers: [PersonaeventoService]
})
export class PersonaeventoModule { }
