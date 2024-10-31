import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Area } from './area.entity';
import { Rol } from './rol.entity';

@Entity()
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  email: string;

  @Column({ type: 'char', length: 1 })
  sexo: string;

  @Column()
  area_id: number;

  @Column({ type: 'int', default: 0 })
  boletin: number;

  @Column({ type: 'text' })
  descripcion: string;

  @ManyToOne(() => Area, (area) => area.empleados)
  @JoinColumn({ name: 'area_id' })
  area: Area;

  @ManyToMany(() => Rol, (rol) => rol.empleados, {
    onDelete: 'CASCADE'
  })
  @JoinTable({
    name: 'empleado_rol',
    joinColumn: {
      name: 'empleado_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'rol_id',
      referencedColumnName: 'id'
    },
  })
  roles: Rol[];
}
