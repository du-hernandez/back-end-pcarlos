import {
  IsEmail,
  Length,
  IsOptional,
  IsEnum,
  IsString,
  IsBoolean
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum TipoID { "CC", "TI", "CE", "PA" };

export class CreatePersonaDto {

  // Documentación de enums: https://docs.nestjs.com/openapi/types-and-parameters#enums
  @ApiProperty({ enum: ['CC', 'TI', 'CE', 'PA'], default: 'CC', example: 'CC', description: "'CC', 'TI', 'CE', 'PA'" })
  @IsEnum(TipoID)
  tipoID: string;

  @ApiProperty({ minLength: 8, maxLength: 10, example: '0000000000' })
  @IsString()
  @Length(8, 11)
  identificacion: string;

  @ApiProperty({ minLength: 2, maxLength: 50, example: 'Juan Marrueco' })
  @IsString()
  @Length(2, 50)
  nombre: string;

  @ApiProperty({ minLength: 8, maxLength: 10, example: '310XXXXXXX' })
  @IsString()
  @Length(8, 10)
  telefono: string;

  @ApiProperty({ minLength: 8, maxLength: 10, example: 'example@server.com' })
  @IsEmail()
  @Length(8, 50)
  correo: string;

  @ApiProperty({ minLength: 1, maxLength: 2, example: '24', description: 'Edad' })
  @Length(1, 2)
  @IsString()
  edad: number;

  @ApiProperty({ example: 'true', default: true, description: 'Optional, value example "true"' })
  @IsOptional()
  @IsBoolean()
  estado: boolean;

}