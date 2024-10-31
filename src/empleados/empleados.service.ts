import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private empleadosRepository: Repository<Empleado>,
  ) { }

  create(empleado: Empleado): Promise<Empleado> {
    return this.empleadosRepository.save(empleado);
  }

  findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find({
      relations: ['roles', 'area'],
    });
  }

  findOne(id: number): Promise<Empleado> {
    return this.empleadosRepository.findOneBy({ id });
  }

  async update(id: number, updateData: Partial<Empleado>): Promise<Empleado> {
    const empleado = await this.empleadosRepository.findOne({
      where: { id }, 
      relations: ['roles'], 
    });
  
    if (!empleado) {
      throw new NotFoundException('Empleado no encontrado');
    }
    
    Object.assign(empleado, updateData);
  
    return await this.empleadosRepository.save(empleado);
  }

  async remove(id: number): Promise<void> {
    const empleado = await this.empleadosRepository.findOne({
      where: { id },
      relations: ['roles']
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado con ID ${id} no encontrado`);
    }


    empleado.roles = [];
    await this.empleadosRepository.save(empleado);

    // Ahora sí podemos eliminar el empleado
    await this.empleadosRepository.remove(empleado);
  }
}
