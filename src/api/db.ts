import Dexie, { Table } from 'dexie';
import { TodoDto } from './service/todoDto';

const DATABASE_CONFIG = {
  name: 'todosDatabase',
  version: 1,
  stores: {
    todos: '++id, title, isCompleted', 
  },
};

export class TodoDbDexie extends Dexie {
  public readonly todos!: Table<TodoDto>;

  constructor() {
    super(DATABASE_CONFIG.name);
    this.configureDatabase();
  }

  private configureDatabase() {
    this.version(DATABASE_CONFIG.version).stores(DATABASE_CONFIG.stores);
  }
}

export const db = new TodoDbDexie();
