import { Todo } from '@core/todo';
import { useStateSelector } from '@store/todoContext';

interface TodoItemProps {
  id: Todo['id'];
  handleDoneChange: (itemId: Todo['id']) => void;
}

export const TodoItem = ({ id, handleDoneChange }: TodoItemProps) => {
  // handleDeleteTodo
  const item = useStateSelector((state) => state.itemsMap[id]);

  if (!item) {
    return null;
  }

  return (
    <div key={id} style={item.isCompleted ? { textDecoration: 'line-through' } : undefined}>
      <input type="checkbox" checked={item.isCompleted} onChange={() => handleDoneChange(item.id)} />
      {item.title}
    </div>
  );
};
