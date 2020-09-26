import { PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

abstract class BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: "now()" })
  fechaCrado: Date;
}

export { BaseEntity };
