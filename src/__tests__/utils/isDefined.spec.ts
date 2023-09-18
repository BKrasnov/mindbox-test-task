import { isDefined } from '@utils/isDefined';

describe('isDefined', () => {
  it('должна возвращать true для определенного значения', () => {
    expect(isDefined(42)).toBe(true);
    expect(isDefined('Hello')).toBe(true);
    expect(isDefined({ key: 'value' })).toBe(true);
  });

  it('должна возвращать false для null и undefined', () => {
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
  });

  it('должна возвращать true для других ложных значений', () => {
    expect(isDefined(false)).toBe(true);
    expect(isDefined(0)).toBe(true);
    expect(isDefined('')).toBe(true);
  });
});
