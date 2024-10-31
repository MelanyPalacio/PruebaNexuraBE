import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Empleado } from './empleado.entity';

@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombre: string;

  @OneToMany(() => Empleado, (empleado) => empleado.area)
  empleados: Empleado[];
}
