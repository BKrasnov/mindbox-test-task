import { FC, useEffect } from 'react';
import { AppButtonTabs } from '@components/AppButtonTabs';
import { useTodos } from '@hooks/useTodos';
import { useStateSelector, TodoFilterValuesType } from '@store/todoContext';
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
  const { items, filter, itemsActiveCount } = useStateSelector((state) => ({
    items: state.itemsMap,
    filter: state.filter,
    itemsActiveCount: state.itemsActiveCount,
  }));

  const { loadTodos, deleteCompletedTodos, update } = useTodos();

  const todosActiveCount =
    filter !== 'completed' ? Object.values(items).filter((item) => !item.isCompleted).length : itemsActiveCount;

  const pluralForm = getPluralForm(todosActiveCount);

  const handleFilterChange = (filter: TodoFilterValuesType) => {
    update({
      filter,
    });
  };

  const handleDeleteChange = () => {
    deleteCompletedTodos();
  };

  useEffect(() => {
    loadTodos(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <StyledTodoFilterBar>
      <StyledActiveTask>
        {todosActiveCount} {pluralForm}
      </StyledActiveTask>
      <StyledTabs>
        <AppButtonTabs isDisabled={!isShow} text={'Все'} onClick={() => handleFilterChange('all')} />
        <AppButtonTabs isDisabled={!isShow} text={'Активные'} onClick={() => handleFilterChange('active')} />
        <AppButtonTabs isDisabled={!isShow} text={'Завершенные'} onClick={() => handleFilterChange('completed')} />
      </StyledTabs>
      <AppButtonTabs
        isDisabled={!isShow}
        text={'Очистить завершенные'}
        onClick={() => handleDeleteChange()}
      ></AppButtonTabs>
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
