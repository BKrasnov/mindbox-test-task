import { PartialTodoWithoutId, Todo } from '@core/models/todo';
import { IS_COMPLETED_TODO, IS_NOT_COMPLETED_TODO, TodoIndexedDb } from '@core/models/todoIndexedDb';

export namespace TodoMapper {
  export function toTodo(todoIndexedDb: TodoIndexedDb): Todo {
    return new Todo({
      id: todoIndexedDb.id,
      title: todoIndexedDb.title,
      isCompleted: todoIndexedDb.isCompleted === IS_COMPLETED_TODO ? true : false,
    });
  }

  export function toTodoIndexedDb(todo: TodoIndexedDb, updateData: PartialTodoWithoutId): TodoIndexedDb {
    return new TodoIndexedDb({
      ...todo,
      ...updateData,
      isCompleted: updateData.isCompleted === true ? IS_COMPLETED_TODO : IS_NOT_COMPLETED_TODO,
    });
  }
}
