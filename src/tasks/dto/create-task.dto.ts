import { OmitType } from '@nestjs/swagger';
import { TaskEntity } from '../entities/task.entity';

export class CreateTaskDto extends OmitType(TaskEntity, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {}
