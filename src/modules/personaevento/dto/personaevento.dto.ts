import {
  IsString,
  IsDate
} from 'class-validator';

export class PersonaeventoDto {

  @IsString()
  temperatura: string;

  @IsDate()
  fechaRegistro: Date;

}
