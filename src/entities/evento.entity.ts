import { BaseEntity } from './base'
import { Column, CreateDateColumn, Entity } from 'typeorm'

@Entity({ name: 'evento' })
export class EventoEntity extends BaseEntity {

  @Column()
  nombre: string;

  @Column({ length: 400 })
  descripcion: string;

  @Column()
  capacidad: number;

  @CreateDateColumn({ type: 'timestamptz' })
  fecha: Date;

  @Column()
  duracion: number;

  @Column()
  edadMin: number;

  @Column()
  edadMax: number;

}
