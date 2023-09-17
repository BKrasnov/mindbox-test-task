import { useUpdate, TodoFilterType } from '@store/todoContext';
import { TodoService } from '@api/service/todoService';
import { Todo } from '@core/todo';

const FILTERS = {
  All: undefined,
  Active: false,
  Completed: true,
};

/** Хук для получения loadTodos function. */
export const useLoadTodos = () => {
  const update = useUpdate();

  async function loadTodos(filter?: TodoFilterType) {
    update({ status: 'loading' });
    const itemsMap: Record<string, Todo> = {};
    const itemIds: Todo['id'][] = [];
    try {
      const completedFilter = FILTERS[filter || 'All'];
      const todos = await TodoService.getTodos(completedFilter);

      todos.forEach((item) => {
        itemIds.push(item.id);
        itemsMap[item.id] = item;
      });

      update({
        status: 'success',
        itemIds,
        itemsMap,
      });
    } catch (error) {
      console.error(error);
      update({
        status: 'error',
      });
    }
  }

  return {
    loadTodos,
    update,
  };
};
