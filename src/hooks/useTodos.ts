import { useUpdate, TodoFilterValuesType } from '@store/todoContext';
import { TodoService } from '@api/service/todoService';
import { Todo } from '@core/models/todo';

const FILTERS = {
  all: undefined,
  active: false,
  completed: true,
};

/** Хук для получения loadTodos function. */
export const useTodos = () => {
  const update = useUpdate();

  async function loadTodos(filter?: TodoFilterValuesType) {
    update({ status: 'loading' });
    const itemsMap: Record<string, Todo> = {};
    const itemIds: Todo['id'][] = [];
    /** Можно посчитать и через reduce, но зачем лишний раз бежать по циклу? */
    try {
      const completedFilter = FILTERS[filter || 'all'];
      const todos = await TodoService.getTodos(completedFilter);
      const itemsActiveCount = await TodoService.getIsActiveTodos();
      todos.forEach((item) => {
        itemIds.push(item.id);
        itemsMap[item.id] = item;
        itemsActiveCount;
      });
      update({
        status: 'success',
        itemIds,
        itemsMap,
        itemsActiveCount,
      });
    } catch (error) {
      console.error(error);
      update({
        status: 'error',
      });
    }
  }

  async function deleteCompletedTodos() {
    await TodoService.deleteCompletedTodos();
    await loadTodos();
  }

  return {
    loadTodos,
    deleteCompletedTodos,
    update,
  };
};
