import { db } from '@api/db';
import { Todo } from '@core/todo';

export namespace TodoService {
  /** Получить задачи. */
  export async function getTodos(): Promise<Todo[]> {
    try {
      const todos = await db.todos.toArray();
      return todos;
    } catch (error) {
      throw Error(`Failed to get todos: ${error}`);
    }
  }

  /** Создать задачу. */
  export async function createTodo(todo: Todo): Promise<void> {
    try {
      await db.todos.add(todo);
    } catch (error) {
      throw Error(`Failed to add ${todo.title}: ${error}`);
    }
  }

  export async function updateTodo(id: string, updateData: Partial<Omit<Todo, 'id'>>) {
    try {
      const todo = await db.todos.get(id);

      if (todo) {
        const updatedTodo: Todo = {
          ...todo,
          ...updateData,
        };

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
      // TODO: можно заюзаь getTodos с опшинами
      const completedTodos = await db.todos.where({ isCompleted: true }).toArray();
      for (const todo of completedTodos) {
        await db.todos.delete(todo.id);
      }
    } catch (error) {
      throw Error(`Failed to delete completed todos: ${error}`);
    }
  }
}
