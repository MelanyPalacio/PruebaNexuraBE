import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from '../entities/rol.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private rolesRepository: Repository<Rol>,
  ) {}

  create(rol: Rol): Promise<Rol> {
    return this.rolesRepository.save(rol);
  }

  findAll(): Promise<Rol[]> {
    return this.rolesRepository.find();
  }

  findOne(id: number): Promise<Rol> {
    return this.rolesRepository.findOneBy({ id });
  }

  async update(id: number, rol: Partial<Rol>): Promise<Rol> {
    await this.rolesRepository.update(id, rol);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}
