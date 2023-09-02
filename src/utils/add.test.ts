import { it, expect } from 'vitest';
import { add } from './add.js';

it('add', () => {
  expect(add()).toBe(0);
  expect(add(1)).toBe(1);
  expect(add(1, 2, 3)).toBe(6);
});
