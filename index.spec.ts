import { describe, expect, test } from 'vitest';
import { promiseAll, getIcecream } from '.';

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

describe('Testing', () => {
  test('ruuuun', async () => {
    expect(await promiseAll([promise1])).toEqual([3]);
  });
  test('ruuuun with two promises', async () => {
    expect(await promiseAll([promise1, promise3])).toEqual([3, 'foo']);
  });
  test('ruuuun with two promises', async () => {
    expect(await promiseAll([promise1, promise2, promise3])).toEqual([
      3,
      42,
      'foo',
    ]);
  });
  test('ice cream got', async () => {
    expect(await getIcecream('vanilla')).toBe('vanilla');
  });
  test.skip('ice cream not got', async () => {
    expect(await getIcecream('chocolate')).toThrow();
  });
});
