import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from '@api/service/todoService';
import { useUpdate } from '@store/todoContext';
import { Todo } from '@core/models/todo';
import { ArrowIcon } from '@components/icons';
import styled from '@emotion/styled';

const MIN_TITLE_LENGTH = 5;

interface AddTodoItemFormProps {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: boolean;
}

export const AddTodoItemForm: FC<AddTodoItemFormProps> = ({ setIsShow, isShow }) => {
  const [title, setTitle] = useState('');
  const update = useUpdate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      return;
    }

    const todoItem = new Todo({
      id: uuidv4(),
      title,
    });

    update((state) => {
      TodoService.createTodo(todoItem);
      return {
        ...state,
        itemsMap: { ...state.itemsMap, [todoItem.id]: todoItem },
        // Сортируется по ID. Да, костыльно, но изначально не предполагалось сортировать.
        // Сделал, так как IndexedDb автоматически возращает отсортированную.
        itemIds: [...state.itemIds, todoItem.id].sort(),
      };
    });

    setTitle('');
  };

  return (
    <StyledAddTodoItemForm>
      <div onClick={() => setIsShow((prev) => !prev)}>
        <ArrowIcon isShow={isShow} />
      </div>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          minLength={MIN_TITLE_LENGTH}
          placeholder="Что нужно сделать?"
        />
      </form>
    </StyledAddTodoItemForm>
  );
};

const StyledAddTodoItemForm = styled.div({
  marginBottom: '1rem',
  display: 'flex',
  gap: '1rem',
});

const StyledInput = styled.input({
  border: 'none',

  '::placeholder': {
    fontStyle: 'italic',
  },

  ':focus': {
    outline: 'none',
  },
});
