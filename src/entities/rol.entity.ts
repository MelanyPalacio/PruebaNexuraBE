import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Empleado } from './empleado.entity';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombre: string;

  @ManyToMany(() => Empleado, (empleado) => empleado.roles)
  @JoinTable({
    name: 'empleado_rol',
    joinColumn: { name: 'rol_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'empleado_id', referencedColumnName: 'id' },
  })
  empleados: Empleado[];
}
