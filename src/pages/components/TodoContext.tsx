import { FC, ReactNode } from 'react';
import { TodoProvider, todoModel } from '@entity/todo';

interface TodoContextProps {
  children: ReactNode;
}

export const TodoContext: FC<TodoContextProps> = ({ children }) => {
  return <TodoProvider initialState={todoModel.constants.initialState}>{children}</TodoProvider>;
};
