import { PartialTodoWithoutId, Todo } from '../models/todo';
import { IS_COMPLETED_TODO, IS_NOT_COMPLETED_TODO, TodoDto } from '@api/service/todoDto';

export namespace TodoMapper {
  export function toTodo({ id, title, isCompleted }: TodoDto): Todo {
    return new Todo({
      id,
      title,
      isCompleted: isCompleted === IS_COMPLETED_TODO ? true : false,
    });
  }

  export function toTodoIndexedDb(todo: TodoDto, updateData: PartialTodoWithoutId): TodoDto {
    return new TodoDto({
      ...todo,
      ...updateData,
      isCompleted: updateData.isCompleted === true ? IS_COMPLETED_TODO : IS_NOT_COMPLETED_TODO,
    });
  }
}
