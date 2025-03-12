import { FC, useEffect } from 'react';
import { AppFilterButton } from '@components/AppFilterButton';
import { todoModel, TodoFilterValuesType } from '@entity/todo';
import styled from '@emotion/styled';

const getPluralForm = (count: number) => {
  if (count === 1) {
    return 'активная задача';
  } else if (count >= 2 && count <= 4) {
    return 'активные задачи';
  } else {
    return 'активных задач';
  }
};

interface TodoFilterBarProps {
  isShow: boolean;
}

export const TodoFilterBar: FC<TodoFilterBarProps> = ({ isShow }) => {
  const { items, filter: currentFilter, itemsActiveCount } = todoModel.hooks.useStateSelector((state) => ({
    items: state.itemsMap,
    filter: state.filter,
    itemsActiveCount: state.itemsActiveCount,
  }));
  console.log('TodoFilterBar')

  const { loadTodos, deleteCompletedTodos, update } = todoModel.hooks.useTodos();

  const todosActiveCount =
  currentFilter !== 'completed' ? Object.values(items).filter(({ isCompleted }) => !isCompleted).length : itemsActiveCount;

  const pluralForm = getPluralForm(todosActiveCount);

  const handleFilterChange = (filter: TodoFilterValuesType) => () => {
    if(filter !== currentFilter) {
      update({
        filter,
      });
    }
  };

  const handleDeleteChange = () => {
    deleteCompletedTodos();
  };

  useEffect(() => {
    loadTodos(currentFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter]);

  return (
    <StyledTodoFilterBar>
      <StyledActiveTask>
        {todosActiveCount} {pluralForm}
      </StyledActiveTask>
      <StyledTabs>
        <AppFilterButton
          disabled={!isShow}
          text='Все'
          onClick={handleFilterChange('all')}
        />
        <AppFilterButton
          disabled={!isShow}
          text='Активные'
          onClick={handleFilterChange('active')}
        />
        <AppFilterButton
          disabled={!isShow}
          text='Завершенные'
          onClick={handleFilterChange('completed')}
        />
      </StyledTabs>
      <AppFilterButton
        disabled={!isShow}
        text={'Очистить завершенные'}
        onClick={() => handleDeleteChange()}
      ></AppFilterButton>
    </StyledTodoFilterBar>
  );
};

const StyledTabs = styled.div({
  display: 'flex',
  gap: '1rem',
});

const StyledActiveTask = styled.div({
  minWidth: '120px',
});

const StyledTodoFilterBar = styled.div((props) => ({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
  fontSize: props.theme.fontSize.m,
  color: props.theme.colors.tertiaryColor,
}));
