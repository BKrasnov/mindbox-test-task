import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '@core/models/todo';
import { TodoContext, TodoItem } from '@pages/components';
import { AppProvider, TodoState } from '@store/todoContext';

const todo = new Todo({
  id: uuidv4(),
  title: 'Test Todo',
  isCompleted: false,
});

export const initialState: TodoState = {
  itemsMap: {
    [todo.id]: todo,
  },
  itemIds: [todo.id],
  itemsActiveCount: 1,
  status: 'init',
  filter: 'all',
};

describe('TodoItem', () => {
  it('Рендерится корректно', () => {
    render(
      <AppProvider initialState={initialState}>
        <TodoItem id={todo.id} handleDoneChange={() => {}} />
      </AppProvider>
    );
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('Не отображается, если элемент равен null', () => {
    render(
      <TodoContext>
        <TodoItem id={uuidv4()} handleDoneChange={() => {}} />
      </TodoContext>
    );
    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
  });
});
