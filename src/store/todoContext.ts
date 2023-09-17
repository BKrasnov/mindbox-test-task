import { createOptimizedContext } from '@utils/createOptimizedContext';
import { Todo } from '@core/models/todo';

export type TodoFilterType = 'All' | 'Active' | 'Completed';

interface TodoState {
  itemsMap: Record<string, Todo>;
  itemIds: Todo['id'][];
  status: 'init' | 'loading' | 'error' | 'success';
  filter: TodoFilterType;
}

const initialState: TodoState = {
  itemsMap: {},
  itemIds: [],
  status: 'init',
  filter: 'All',
};

const { Provider: AppProvider, useStateSelector, useUpdate } = createOptimizedContext<TodoState>();

export { AppProvider, useStateSelector, useUpdate, initialState };
