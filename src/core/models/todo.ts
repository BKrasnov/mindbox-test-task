export class Todo {
  public readonly id: string;

  public readonly title: string;

  public readonly isCompleted: boolean;

  constructor(data: InitTodoParams) {
    this.id = data.id;
    this.title = data.title;
    this.isCompleted = data.isCompleted || false;
  }
}

export type PartialTodoWithoutId = Partial<Omit<Todo, 'id'>>;

/** Параметры, с необязательным полем isCompleted. */
type InitTodoParams = Omit<Todo, 'isCompleted'> & {
  isCompleted?: boolean;
};
