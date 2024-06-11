import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsDate, IsEnum, IsInt, IsString } from 'class-validator';

export class TaskEntity {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: number;

  @ApiProperty({ example: 'Task title' })
  @IsString()
  title: string;

  @ApiProperty({ example: Status.COMPLETED, required: false })
  @IsEnum(Status)
  status?: Status;

  @ApiProperty({ example: new Date(), required: false })
  @IsDate()
  createdAt?: Date;

  @ApiProperty({ example: new Date(), required: false })
  @IsDate()
  updatedAt?: Date;
}
