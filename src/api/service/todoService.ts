import { db } from '@api/db';
import { TodoMapper } from '@core/mapper/TodoMapper';
import { PartialTodoWithoutId, Todo } from '@core/models/todo';
import { IS_COMPLETED_TODO, IS_NOT_COMPLETED_TODO } from '@core/models/todoIndexedDb';

export namespace TodoService {
  /** Получить задачи. */
  export async function getTodos(completed?: boolean): Promise<Todo[]> {
    try {
      const query =
        completed === true
          ? db.todos.where({ isCompleted: IS_COMPLETED_TODO })
          : completed === false
          ? db.todos.where({ isCompleted: IS_NOT_COMPLETED_TODO })
          : db.todos;

      const todos = await query.toArray();
      return todos.map((todo) => TodoMapper.toTodo(todo));
    } catch (error) {
      throw Error(`Failed to get todos: ${error}`);
    }
  }

  /** Создать задачу. */
  export async function createTodo(todo: Todo): Promise<void> {
    try {
      await db.todos.add({ ...todo, isCompleted: todo.isCompleted ? IS_COMPLETED_TODO : IS_NOT_COMPLETED_TODO });
    } catch (error) {
      throw Error(`Failed to add ${todo.title}: ${error}`);
    }
  }

  /** Обновить задачу. */
  export async function updateTodo(id: string, updateData: PartialTodoWithoutId): Promise<void> {
    try {
      const todo = await db.todos.get(id);

      if (todo) {
        const updatedTodo = TodoMapper.toTodoIndexedDb(todo, updateData);
        await db.todos.put(updatedTodo);
      } else {
        throw Error(`Todo with ID ${id} not found`);
      }
    } catch (error) {
      throw Error(`Failed to update todo with ID ${id}: ${error}`);
    }
  }

  /** Удалить завершенные задачи. */
  export async function deleteCompletedTodos(): Promise<void> {
    try {
      const completedTodos = await getTodos(IS_COMPLETED_TODO && true);
      for (const todo of completedTodos) {
        await db.todos.delete(todo.id);
      }
    } catch (error) {
      throw Error(`Failed to delete completed todos: ${error}`);
    }
  }

  /** Получить количество активных todo. */
  export async function getIsActiveTodos(): Promise<number> {
    try {
      const activeTodos = await getTodos(false);
      return activeTodos.length;
    } catch (error) {
      throw Error(`Failed to count incomplete todos: ${error}`);
    }
  }
}
