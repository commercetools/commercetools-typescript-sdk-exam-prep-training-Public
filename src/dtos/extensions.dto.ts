import { IsObject, IsNotEmpty } from 'class-validator';

export class CustomObjectCreateUpdateBodyDto {
  @IsObject()
  @IsNotEmpty()
  json: Record<string, any>;
}
