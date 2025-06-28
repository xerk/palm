import { IsString, IsNumber, IsOptional, IsNotEmpty, Min, Max, IsEnum } from 'class-validator';

export enum Mood {
  SMILE = 'smile',
  FROWN = 'frown',
  MEH = 'meh',
}

export class CheckinDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(Mood)
  mood: Mood;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  energy: number;

  @IsString()
  @IsOptional()
  notes?: string;
}