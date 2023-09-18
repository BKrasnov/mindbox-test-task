import { createOptimizedContext } from '@utils/createOptimizedContext';
import { Todo } from '@core/models/todo';

export type TodoFilterValuesType = 'all' | 'active' | 'completed';

interface TodoState {
  itemsMap: Record<string, Todo>;
  itemIds: Todo['id'][];
  itemsActiveCount: number;
  status: 'init' | 'loading' | 'error' | 'success';
  filter: TodoFilterValuesType;
}

const initialState: TodoState = {
  itemsMap: {},
  itemIds: [],
  itemsActiveCount: 0,
  status: 'init',
  filter: 'all',
};

const { Provider: AppProvider, useStateSelector, useUpdate } = createOptimizedContext<TodoState>();

export { AppProvider, useStateSelector, useUpdate, initialState };
