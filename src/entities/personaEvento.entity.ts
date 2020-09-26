import { BaseEntity } from './base'
import { Column, CreateDateColumn, Entity } from 'typeorm'

// Tabla internedia (entidad débil)

@Entity({ name: 'persona_evento' })
export class PersonaEventoEntity extends BaseEntity {

  @Column()
  temperatura: number;

  @CreateDateColumn({ type: 'timestamptz' })
  fechaRegistro: Date;

}
