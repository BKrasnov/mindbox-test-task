import { useEffect, useState } from 'react';
import { useStateSelector } from '@store/todoContext';
import { AddTodoItemForm, TodoContext, TodoListItems, TodoFilterBar } from './components';
import { useTodos } from '@hooks/useTodos';

import styled from '@emotion/styled';

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

  const { loadTodos } = useTodos();

  useEffect(() => {
    loadTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = () => {
    if (status === 'init' || status === 'loading') {
      return 'Загрузка...';
    }

    if (status === 'error') {
      return 'Неизвестная ошибка';
    }

    return <TodoListItems />;
  };

  return (
    <StyledTodoWrapper>
      <AddTodoItemForm setIsShow={setIsShow} isShow={isShow} />
      {isShow && renderList()}
      <TodoFilterBar isShow={isShow} />
    </StyledTodoWrapper>
  );
};

export const StyledTodoWrapper = styled.div((props) => ({
  minWidth: '425px',
  width: '70%',
  backgroundColor: props.theme.colors.primaryColor,
  padding: '0.5rem',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  margin: '0 auto',
  marginTop: '2vh',
}));
