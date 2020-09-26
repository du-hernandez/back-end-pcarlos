import { ApiProperty } from "@nestjs/swagger";


export class EventoDto {
  @ApiProperty({ minLength: 3, maxLength: 30, example: 'Jasinto' })
  nombre: string;

  @ApiProperty({ minLength: 3, maxLength: 10, example: 'Se casa con Josefa' })
  descripcion: string;

  @ApiProperty({ minLength: 1, maxLength: 10000, example: 'Capacidad' })
  capacidad: number;

  @ApiProperty({ description: "'CC', 'TI', 'CE', 'PA'" })
  fecha: Date;

  @ApiProperty({ description: "'CC', 'TI', 'CE', 'PA'" })
  duracion: number;

  @ApiProperty({ description: "'CC', 'TI', 'CE', 'PA'" })
  edadMin: number;

  @ApiProperty({ description: "'CC', 'TI', 'CE', 'PA'" })
  edadMax: number;
}
