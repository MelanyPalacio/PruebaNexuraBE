import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { Empleado } from './entities/empleado.entity';
import { Rol } from './entities/rol.entity';
import { EmpleadosService } from './empleados/empleados.service';
import { EmpleadosController } from './empleados/empleados.controller';
import { AreasService } from './areas/areas.service';
import { AreasController } from './areas/areas.controller';
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'prueba_user',
      password: 'prueba_pass',
      database: 'empleados',
      autoLoadEntities: true,
      synchronize: true, // disable in production
    }),
    TypeOrmModule.forFeature([Empleado, Area, Rol]),
  ],
  controllers: [AppController, EmpleadosController, AreasController, RolesController],
  providers: [AppService, EmpleadosService, AreasService, RolesService],
})
export class AppModule {}
