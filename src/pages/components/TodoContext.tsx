import { FC, ReactNode } from 'react';
import { AppProvider, initialState } from '@store/todoContext';

interface TodoContextProps {
  children: ReactNode;
}

export const TodoContext: FC<TodoContextProps> = ({ children }) => {
  return <AppProvider initialState={initialState}>{children}</AppProvider>;
};
