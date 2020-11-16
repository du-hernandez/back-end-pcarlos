import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConnectionService } from './config/database-connection.service';
import { PersonaModule } from './modules/persona/persona.module';
import { EventoModule } from './modules/evento/evento.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { PersonaeventoModule } from './modules/personaevento/personaevento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConnectionService.createTypeOrmOptions()),
    PersonaModule,
    EventoModule,
    UsuarioModule,
    PersonaeventoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
