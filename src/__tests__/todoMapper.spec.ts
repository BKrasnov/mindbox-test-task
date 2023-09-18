import { TodoMapper } from '@core/mapper/TodoMapper';
import { PartialTodoWithoutId } from '@core/models/todo';
import { TodoIndexedDb, IS_COMPLETED_TODO, IS_NOT_COMPLETED_TODO } from '@core/models/todoIndexedDb';
import { v4 as uuidv4 } from 'uuid';

const todoIndexedDbMock: TodoIndexedDb = {
  id: uuidv4(),
  title: 'Поиграть',
  isCompleted: IS_COMPLETED_TODO,
};

const partialTodoWithoutIdMock: PartialTodoWithoutId = {
  title: 'Поиграть',
  isCompleted: false,
};

describe('TodoMapper', () => {
  describe('toTodo', () => {
    it('Преобразовать TodoIndexedDb в Todo', () => {
      const result = TodoMapper.toTodo(todoIndexedDbMock);
      expect(result.id).toEqual(todoIndexedDbMock.id);
      expect(result.title).toEqual(todoIndexedDbMock.title);
      expect(result.isCompleted).toEqual(true);
    });
  });

  describe('toTodoIndexedDb', () => {
    it('Преобразовать Todo в TodoIndexedDb с IsCompleted true', () => {
      const result = TodoMapper.toTodoIndexedDb(todoIndexedDbMock, partialTodoWithoutIdMock);
      expect(result.id).toEqual(todoIndexedDbMock.id);
      expect(result.title).toEqual(partialTodoWithoutIdMock.title);
      expect(result.isCompleted).toEqual(IS_NOT_COMPLETED_TODO);
    });

    it('преобразовать Todo в TodoIndexedDb с IsCompleted false', () => {
      const updatedData = { ...partialTodoWithoutIdMock, isCompleted: true };
      const result = TodoMapper.toTodoIndexedDb(todoIndexedDbMock, updatedData);
      expect(result.id).toEqual(todoIndexedDbMock.id);
      expect(result.title).toEqual(updatedData.title);
      expect(result.isCompleted).toEqual(IS_COMPLETED_TODO);
    });
  });
});
