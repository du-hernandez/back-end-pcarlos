import { BaseEntity } from './base';
import { Column, Entity, OneToMany } from 'typeorm';
import { EventoEntity } from './evento.entity';

@Entity({ name: 'usuario' })
export class UsuarioEntity extends BaseEntity {

  @Column("character varying", { length: 3 })
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

  @Column("text", {
    select: false,
    nullable: false
  })
  contrasena: string;

  @OneToMany(type => EventoEntity, evento => evento.usuario)
  eventos: EventoEntity[];

}
