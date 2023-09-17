import Dexie, { Table } from 'dexie';
import { Todo } from '@core/todo';

// Библиотека для работы с IndexedDb. Давно хотел поработать с IndexedDB, поэтому решил попробовать)

const DATABASE_CONFIG = {
  version: 1,
  stores: {
    todos: '++id, title, isCompleted', // Первичный ключ и индексированные реквизиты для Todo.
  },
};

export class TodoDbDexie extends Dexie {
  public readonly todos!: Table<Todo>;

  constructor() {
    super('todosDatabase');
    this.configureDatabase();
  }

  private configureDatabase() {
    this.version(DATABASE_CONFIG.version).stores(DATABASE_CONFIG.stores);
  }
}

export const db = new TodoDbDexie();
