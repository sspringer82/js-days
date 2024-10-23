import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './math.js';

test('add() should return the sum of two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
  assert.strictEqual(add(0, 0), 0);
});
