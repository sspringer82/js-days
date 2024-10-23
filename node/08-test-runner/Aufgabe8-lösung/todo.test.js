import { test } from 'node:test';
import assert from 'node:assert';
import { addTodo, getTodos, updateTodo, deleteTodo } from './todo.js';

test('addTodo() should add a todo', () => {
  addTodo('Test Todo');
  assert.strictEqual(getTodos()[0], 'Test Todo');
});

test('getTodos() should return all todos', () => {
  addTodo('Todo 1');
  addTodo('Todo 2');
  const todos = getTodos();
  assert.deepStrictEqual(todos, ['Todo 1', 'Todo 2']);
});

test('updateTodo() should update a todo', () => {
  updateTodo(0, 'Updated Todo');
  assert.strictEqual(getTodos()[0], 'Updated Todo');
});

test('deleteTodo() should delete a todo', () => {
  deleteTodo(0);
  assert.strictEqual(getTodos().length, 1);
});

test('updateTodo() should throw error for invalid index', () => {
  assert.throws(() => updateTodo(100, 'Invalid Update'), {
    message: 'Ungültiger Index',
  });
});

test('deleteTodo() should throw error for invalid index', () => {
  assert.throws(() => deleteTodo(100), {
    message: 'Ungültiger Index',
  });
});
