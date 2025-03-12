import { todoModel, Todo } from '@entity/todo';
import { TodoItem } from './TodoItem';
import { TodoService } from '@api/service/todoService';

export const TodoListItems = () => {
  const itemsIds = todoModel.hooks.useStateSelector((state) => state.itemIds);
  const update = todoModel.hooks.useUpdate();

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
    <ul>
      {itemsIds.map((id) => (
        <TodoItem key={id} id={id} handleDoneChange={handleDoneChange} />
      ))}
    </ul>
  );
};
