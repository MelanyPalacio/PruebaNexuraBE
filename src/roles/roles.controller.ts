import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { Rol } from '../entities/rol.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() rol: Rol): Promise<Rol> {
    return this.rolesService.create(rol);
  }

  @Get()
  findAll(): Promise<Rol[]> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Rol> {
    return this.rolesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() rol: Partial<Rol>): Promise<Rol> {
    return this.rolesService.update(id, rol);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.rolesService.remove(id);
  }
}
