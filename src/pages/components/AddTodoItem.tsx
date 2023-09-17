import { v4 as uuidv4 } from 'uuid';
import { TodoService } from '@api/service/todoService';
import { useUpdate } from '@store/todoContext';
import { useState } from 'react';
import { Todo } from '@core/todo';

export const AddTodoItemForm = () => {
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
        itemIds: [...state.itemIds, todoItem.id],
      };
    });

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
