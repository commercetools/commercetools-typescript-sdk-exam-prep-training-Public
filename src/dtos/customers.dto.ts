import { IntersectionType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber
} from 'class-validator';

export class CustomerAuthenticateBodyDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  anonymousCartId?: string;
}

export class CustomerAuthenticateParamsDto {
  @IsNotEmpty()
  @IsString()
  storeKey: string;
}

export class CustomerAuthenticateDto extends IntersectionType(
  CustomerAuthenticateBodyDto,
  CustomerAuthenticateParamsDto,
) {}

export class CustomFieldsUpdateBodyDto {
  @IsNumber()
  @IsNotEmpty()
  points: number;
}

export class CustomFieldsUpdateParamsDto {
  @IsString()
  @IsNotEmpty()
  storeKey: string;
  
  @IsString()
  @IsNotEmpty()
  customerKey: string;
}

export class CustomFieldsUpdateDto extends IntersectionType(
  CustomFieldsUpdateBodyDto,
  CustomFieldsUpdateParamsDto,
) {}
