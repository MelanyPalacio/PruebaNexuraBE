import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from '../entities/area.entity';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area)
    private areasRepository: Repository<Area>,
  ) {}

  create(area: Area): Promise<Area> {
    return this.areasRepository.save(area);
  }

  findAll(): Promise<Area[]> {
    return this.areasRepository.find();
  }

  findOne(id: number): Promise<Area> {
    return this.areasRepository.findOneBy({ id });
  }

  async update(id: number, area: Partial<Area>): Promise<Area> {
    await this.areasRepository.update(id, area);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.areasRepository.delete(id);
  }
}
