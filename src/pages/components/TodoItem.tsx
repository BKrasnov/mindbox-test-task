import { todoModel, Todo } from '@entity/todo';
import styled from '@emotion/styled';

interface TodoItemProps {
  id: Todo['id'];
  handleDoneChange: (itemId: Todo['id']) => void;
}

export const TodoItem = ({ id, handleDoneChange }: TodoItemProps) => {
  const { id: itemId, isCompleted, title } = todoModel.hooks.useStateSelector((state) => state.itemsMap[id]);

  return (
    <StyledTodoItem key={id}>
      <StyledInput
        type='checkbox'
        checked={isCompleted}
        onChange={() => handleDoneChange(itemId)}
      />
      <StyledTitle isCompleted={isCompleted}>{title}</StyledTitle>
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

export const StyledTitle = styled.span(({ isCompleted }: { isCompleted: boolean }) => ({
  textDecoration: isCompleted ? 'line-through' : 'none',
}));
