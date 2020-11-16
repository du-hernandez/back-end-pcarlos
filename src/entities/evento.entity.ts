import { BaseEntity } from './base'
import { Column, CreateDateColumn, Entity, ManyToMany, JoinTable, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { UsuarioEntity } from './usuario.entity';
import { PersonaEventoEntity } from './personaEvento.entity';

@Entity({ name: 'evento' })
export class EventoEntity extends BaseEntity {

  @Column()
  nombre: string;

  @Column({ length: 400 })
  descripcion: string;

  @Column()
  capacidad: number;

  // @CreateDateColumn({ type: 'timestamptz' })
  @Column("character varying", { length: 30 })
  fecha: string;

  @Column()
  duracion: number;

  @Column()
  edadMin: number;

  @Column()
  edadMax: number;

  // @ManyToMany(type => PersonaEntity, persona => persona.eventos)
  // @JoinTable({ name: 'perosona_has_evento' })
  // personas: PersonaEntity[];

  @ManyToOne(type => UsuarioEntity, usuario => usuario.eventos)
  @JoinColumn({ name: 'fk_usuario' })
  usuario: UsuarioEntity;

  @OneToMany(type => PersonaEventoEntity, personaEvento => personaEvento.evento)
  personaEventos: PersonaEventoEntity[];

}
