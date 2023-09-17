import { AppButtonTabs } from '@components/AppButtonTabs';
import styled from '@emotion/styled';
import { useTodos } from '@hooks/useTodos';
import { useStateSelector, TodoFilterType } from '@store/todoContext';
import { useEffect } from 'react';

const getPluralForm = (count: number) => {
  if (count === 1) {
    return 'активная задача';
  } else if (count >= 2 && count <= 4) {
    return 'активные задачи';
  } else {
    return 'активных задач';
  }
};

export const TodoFilterBar = () => {
  const { items, filter } = useStateSelector((state) => ({
    items: state.itemsMap,
    filter: state.filter,
  }));

  const { loadTodos, deleteCompletedTodos, update } = useTodos();

  const itemsActive = Object.values(items).filter((item) => !item.isCompleted);

  const activeTasksCount = itemsActive.length;
  const pluralForm = getPluralForm(activeTasksCount);

  const handleFilterChange = (filter: TodoFilterType) => {
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
        {activeTasksCount} {pluralForm}
      </StyledActiveTask>
      <StyledTabs>
        <AppButtonTabs text={'Все'} onClick={() => handleFilterChange('All')} />
        <AppButtonTabs text={'Активные'} onClick={() => handleFilterChange('Active')} />
        <AppButtonTabs text={'Завершенные'} onClick={() => handleFilterChange('Completed')} />
      </StyledTabs>
      <AppButtonTabs text={'Очистить завершенные'} onClick={() => handleDeleteChange()}></AppButtonTabs>
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
