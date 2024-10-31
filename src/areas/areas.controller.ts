import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AreasService } from './areas.service';
import { Area } from '../entities/area.entity';

@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Post()
  create(@Body() area: Area): Promise<Area> {
    return this.areasService.create(area);
  }

  @Get()
  findAll(): Promise<Area[]> {
    return this.areasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Area> {
    return this.areasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() area: Partial<Area>): Promise<Area> {
    return this.areasService.update(id, area);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.areasService.remove(id);
  }
}
