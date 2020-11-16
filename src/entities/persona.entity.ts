import { BaseEntity } from './base'
import { Column, Entity, Connection, ManyToMany, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { EventoEntity } from './evento.entity';
import { PersonaEventoEntity } from './personaEvento.entity';

// enum tipoID { CC, TI, CE, PA }

@Entity({ name: 'persona' })
export class PersonaEntity extends BaseEntity {

  // @Column({
  //   type: 'enum',
  //   enum: tipoID,
  //   default: tipoID.CC
  // })
  @Column("character varying", { length: 2 })
  // tipoID: tipoID;
  tipoID: string;

  @Column("character varying", { length: 100 })
  identificacion: string;

  @Column("character varying", { length: 100 })
  nombre: string;

  @Column("character varying", { length: 100 })
  telefono: string;

  @Column("character varying", { length: 100 })
  correo: string;

  @Column({ type: 'int' })
  edad: number;

  // @ManyToMany(type => EventoEntity, evento => evento.personas)
  // eventos: EventoEntity[];

  // Solución: Hacer relación OneToMany a la entidad Persona_has_Evento

  @OneToMany(type => PersonaEventoEntity, personaEvento => personaEvento.persona)
  personaEventos: PersonaEventoEntity[];
}

// export const PersonaProvider = {
//   provide: 'PersonaRepository',
//   useFactory: (connection: Connection) => connection.getCustomRepository(PersonaEntity),
//   inject: [Connection]
// };