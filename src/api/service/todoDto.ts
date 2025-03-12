export const IS_COMPLETED_TODO = 1;
export const IS_NOT_COMPLETED_TODO = 0;

export type IndexDbFakeBoolean = typeof IS_COMPLETED_TODO | typeof IS_NOT_COMPLETED_TODO;

export class TodoDto {
  public readonly id: string;

  public readonly title: string;

  public readonly isCompleted: IndexDbFakeBoolean;

  constructor(data: InitTodoDtoParams) {
    this.id = data.id;
    this.title = data.title;
    this.isCompleted = data.isCompleted || 0;
  }
}

type InitTodoDtoParams = TodoDto;
