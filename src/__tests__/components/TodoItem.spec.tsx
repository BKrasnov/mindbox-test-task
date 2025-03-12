import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '@entity/todo';
import { TodoContext, TodoItem } from '@pages/components';
import { TodoProvider, TodoState } from '@entity/todo';

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
      <TodoProvider initialState={initialState}>
        <TodoItem id={todo.id} handleDoneChange={() => {}} />
      </TodoProvider>
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
