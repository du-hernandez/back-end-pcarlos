import {
  Length,
  IsString,
  IsNumber,
  IsDate
} from 'class-validator';

export class EventoDto {
  @IsString()
  @Length(2, 50)
  nombre: string;

  @IsString()
  @Length(0, 200)
  descripcion: string;

  @IsNumber()
  capacidad: number;

  @IsString()
  fecha: string;

  @IsNumber()
  duracion: number;

  @IsNumber()
  edadMin: number;

  @IsNumber()
  edadMax: number;
}
