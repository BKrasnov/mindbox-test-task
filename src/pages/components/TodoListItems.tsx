import { useStateSelector, useUpdate } from '@store/todoContext';
import { TodoItem } from './TodoItem';
import { Todo } from '@core/todo';
import { TodoService } from '@api/service/todoService';

export const TodoListItems = () => {
  const itemsIds = useStateSelector((state) => state.itemIds);
  const update = useUpdate();

  const handleDoneChange = (itemId: Todo['id']) => {
    update((state) => {
      TodoService.updateTodo(itemId, { isCompleted: !state.itemsMap[itemId].isCompleted });
      return {
        ...state,
        itemsMap: {
          ...state.itemsMap,
          [itemId]: {
            ...state.itemsMap[itemId],
            isCompleted: !state.itemsMap[itemId].isCompleted,
          },
        },
      };
    });
  };

  return (
    <div>
      {itemsIds.map((id) => (
        <TodoItem key={id} id={id} handleDoneChange={handleDoneChange} /> // handleDeleteTodo={handleDeleteTodo}
      ))}
    </div>
  );
};
