import {
  IsEmail,
  Length,
  IsOptional,
  IsEnum,
  IsString,
  IsBoolean
} from 'class-validator';

export enum TipoID { "CC", "TI", "CE", "PA" };

export class CreatePersonaDto {

  @IsEnum(TipoID)
  tipoID: string;

  @IsString()
  @Length(8, 11)
  identificacion: string;

  @IsString()
  @Length(2, 50)
  nombre: string;

  @IsString()
  @Length(5, 10)
  telefono: string;

  @IsEmail()
  @Length(8, 50)
  correo: string;

  @Length(3, 20)
  @IsString()
  contrasena: string;

  @Length(1, 2)
  @IsString()
  edad: number;

  @IsOptional()
  @IsBoolean()
  estado: boolean;

}