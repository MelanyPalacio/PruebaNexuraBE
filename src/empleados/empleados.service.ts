import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private empleadosRepository: Repository<Empleado>,
  ) {}

  create(empleado: Empleado): Promise<Empleado> {
    return this.empleadosRepository.save(empleado);
  }

  findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find();
  }

  findOne(id: number): Promise<Empleado> {
    return this.empleadosRepository.findOneBy({ id });
  }

  async update(id: number, empleado: Partial<Empleado>): Promise<Empleado> {
    await this.empleadosRepository.update(id, empleado);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.empleadosRepository.delete(id);
  }
}
