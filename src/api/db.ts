import Dexie, { Table } from 'dexie';
import { TodoIndexedDb } from '@core/models/todoIndexedDb';

// Библиотека для работы с IndexedDb. Давно хотел поработать с IndexedDB, поэтому решил попробовать)

const DATABASE_CONFIG = {
  name: 'todosDatabase',
  version: 1,
  stores: {
    todos: '++id, title, isCompleted', // Первичный ключ и индексированные реквизиты для Todo.
  },
};

export class TodoDbDexie extends Dexie {
  public readonly todos!: Table<TodoIndexedDb>;

  constructor() {
    super(DATABASE_CONFIG.name);
    this.configureDatabase();
  }

  private configureDatabase() {
    this.version(DATABASE_CONFIG.version).stores(DATABASE_CONFIG.stores);
  }
}

export const db = new TodoDbDexie();
