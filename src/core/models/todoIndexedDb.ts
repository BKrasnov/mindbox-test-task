export type IndexDbFakeBoolean = 1 | 0;

/**
 * Тестовое задание почти сделано. Однако только сейчас узнал, что IndexedDB не поддерживает индексы для логических свойств.
 * Но работать в UI с 1 и 0, а также переписывать его - не норм.
 * Поэтому решено сделать 2 отдельных класса, что правильней и маппить на этапе получения и добавления.
 * Можно ли это назвать TodoDto? (Data transfer object)
 */
export class TodoIndexedDb {
  public readonly id: string;

  public readonly title: string;

  public readonly isCompleted: IndexDbFakeBoolean;

  constructor(data: InitTodoIndexedDbParams) {
    this.id = data.id;
    this.title = data.title;
    this.isCompleted = data.isCompleted || 0;
  }
}

type InitTodoIndexedDbParams = TodoIndexedDb;
