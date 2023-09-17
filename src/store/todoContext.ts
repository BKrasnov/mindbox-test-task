import { createOptimizedContext } from '@utils/createOptimizedContext';
import { Todo } from '@core/todo';

interface TodoState {
  itemsMap: Record<string, Todo>;
  itemIds: Todo['id'][];
  status: 'init' | 'loading' | 'error' | 'success';
}

const initialState: TodoState = {
  itemsMap: {},
  itemIds: [],
  status: 'init',
};

const { Provider: AppProvider, useStateSelector, useUpdate } = createOptimizedContext<TodoState>();

export { AppProvider, useStateSelector, useUpdate, initialState };
