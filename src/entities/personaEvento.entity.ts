import { BaseEntity } from './base'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { EventoEntity } from './evento.entity';
import { PersonaEntity } from './persona.entity';

// Tabla internedia (entidad débil)

@Entity({ name: 'persona_evento' })
export class PersonaEventoEntity extends BaseEntity {

  @Column()
  temperatura: number;

  @CreateDateColumn({ type: 'timestamptz', default: "now()" })
  fechaRegistro: Date;

  @ManyToOne(type => EventoEntity, evento => evento.personaEventos)
  @JoinColumn({ name: 'fk_evento' })
  evento: EventoEntity;

  @ManyToOne(type => PersonaEntity, persona => persona.personaEventos)
  @JoinColumn({ name: 'fk_persona' })
  persona: PersonaEntity;
}
