import { initialState, useStateSelector, useUpdate } from './lib/todoContext';
import { useTodos } from './lib/useTodos';

export type { IndexDbFakeBoolean } from '../../api/service/todoDto';
export { Provider as TodoProvider } from './lib/todoContext';
export { TodoMapper } from './lib/TodoMapper';
export type { TodoFilterValuesType, TodoState } from './lib/todoContext';
export { Todo } from './models/todo';
export type { PartialTodoWithoutId } from './models/todo';

export const todoModel = {
  hooks: {
    useStateSelector,
    useUpdate,
    useTodos,
  },
  constants: {
    initialState,
  },
};
