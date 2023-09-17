import { useStateSelector, useUpdate } from '@store/todoContext';
import { TodoContext } from './components/TodoContext';
import { useEffect } from 'react';
import { TodoListItems } from './components/TodoListItems';
import { AddTodoItemForm } from './components/AddTodoItem';
import { TodoService } from '@api/service/todoService';
import { Todo } from '@core/todo';

export const MainPage = () => {
  return (
    <TodoContext>
      <AppTodoWrapper />
    </TodoContext>
  );
};

const AppTodoWrapper = () => {
  const status = useStateSelector((state) => state.status);

  const update = useUpdate();

  async function loadTodos() {
    const itemsMap: Record<string, Todo> = {};
    const itemIds: Todo['id'][] = [];
    try {
      const todos = await TodoService.getTodos();

      todos.forEach((item) => {
        itemIds.push(item.id);
        itemsMap[item.id] = item;
      });

      update({
        status: 'success',
        itemIds,
        itemsMap,
      });
    } catch (error) {
      console.error(error);
      update({
        status: 'error',
      });
    }
  }

  useEffect(() => {
    update({ status: 'loading' });
    loadTodos();
  }, []);

  const renderList = () => {
    if (status === 'init' || status === 'loading') {
      return 'Loading...';
    }

    if (status === 'error') {
      return 'Error happened';
    }

    return <TodoListItems />;
  };

  return (
    <div>
      <AddTodoItemForm />
      {renderList()}
    </div>
  );
};
