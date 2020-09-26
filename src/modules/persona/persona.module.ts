import { Module } from '@nestjs/common';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaEntity } from '../../entities/persona.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonaEntity])
  ],
  controllers: [PersonaController],
  providers: [PersonaService]
})
export class PersonaModule { }
