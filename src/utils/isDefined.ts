/** Проверяет, определено ли значение. */
export function isDefined<T>(value: T | null | undefined): value is T {
  if (value !== null && value !== undefined) {
    return true;
  }
  return false;
}
