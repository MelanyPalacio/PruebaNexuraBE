import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { Empleado } from '../entities/empleado.entity';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  create(@Body() empleado: Empleado): Promise<Empleado> {
    return this.empleadosService.create(empleado);
  }

  @Get()
  findAll(): Promise<Empleado[]> {
    return this.empleadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Empleado> {
    return this.empleadosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() empleado: Partial<Empleado>,
  ): Promise<Empleado> {
    return this.empleadosService.update(id, empleado);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.empleadosService.remove(id);
  }
}
