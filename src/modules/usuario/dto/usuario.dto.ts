import {
  IsEmail,
  Length,
  IsOptional,
  IsEnum,
  IsString,
  IsBoolean,
  IsNumber
} from 'class-validator';

export enum TipoID { CC, TI, CE, PA };

export class CreateUsuarioDto {

  // Documentación de enums: https://docs.nestjs.com/openapi/types-and-parameters#enums
  @IsEnum(TipoID)
  tipoID: string;

  @IsString()
  @Length(8, 11)
  identificacion: string;

  @IsString()
  @Length(2, 50)
  nombre: string;

  @IsString()
  @Length(8, 10)
  telefono: string;

  @IsEmail()
  @Length(3, 50)
  correo: string;

  @IsString()
  @Length(5, 50)
  contrasena: string;

  @IsNumber()
  edad: number;

  // @IsOptional()
  // @IsBoolean()
  // estado: boolean;

}