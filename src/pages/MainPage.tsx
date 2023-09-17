import { useStateSelector } from '@store/todoContext';
import { TodoContext } from './components/TodoContext';
import { useEffect, useState } from 'react';
import { TodoListItems } from './components/TodoListItems';
import { AddTodoItemForm } from './components/AddTodoItem';
import { StyledTodoWrapper } from './styled';
import { TodoFilterBar } from './components/TodoFilterBar';
import { useLoadTodos } from '@hooks/useLoadTodos';

export const MainPage = () => {
  return (
    <TodoContext>
      <AppTodoWrapper />
    </TodoContext>
  );
};

const AppTodoWrapper = () => {
  const [isShow, setIsShow] = useState(true);

  const status = useStateSelector((state) => state.status);

  const { loadTodos } = useLoadTodos();

  useEffect(() => {
    loadTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = () => {
    if (status === 'init' || status === 'loading') {
      return 'Loading...';
    }

    if (status === 'error') {
      return 'Error happened';
    }

    return <TodoListItems />;
  };

  return (
    <StyledTodoWrapper>
      <AddTodoItemForm setIsShow={setIsShow} isShow={isShow} />
      {isShow && renderList()}
      <TodoFilterBar />
    </StyledTodoWrapper>
  );
};
