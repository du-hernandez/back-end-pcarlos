import { BaseEntity } from './base'
import { Column, Entity } from 'typeorm'

enum tipoID { CC, TI, CE, PA }

@Entity({ name: 'usuario' })
export class UsuarioEntity extends BaseEntity {

  @Column({
    type: 'enum',
    enum: tipoID,
    default: tipoID.CC
  })
  tipoID: tipoID;

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
    nullable: true
  })
  contrasena: string;

}
