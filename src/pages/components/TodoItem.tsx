import { Todo } from '@core/models/todo';
import styled from '@emotion/styled';
import { useStateSelector } from '@store/todoContext';

interface TodoItemProps {
  id: Todo['id'];
  handleDoneChange: (itemId: Todo['id']) => void;
}

export const TodoItem = ({ id, handleDoneChange }: TodoItemProps) => {
  const item = useStateSelector((state) => state.itemsMap[id]);

  if (!item) {
    return null;
  }

  return (
    <StyledTodoItem key={id}>
      <StyledInput type="checkbox" checked={item.isCompleted} onChange={() => handleDoneChange(item.id)} />
      {item.title}
    </StyledTodoItem>
  );
};

export const StyledInput = styled.input({
  borderRadius: '50%',
  width: '20px',
});

export const StyledTodoItem = styled.li({
  display: 'flex',
  padding: '0.7rem',
  gap: '0.7rem',
});
