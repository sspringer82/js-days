let todos = [];

export function addTodo(todo) {
  todos.push(todo);
}

export function getTodos() {
  return todos;
}

export function updateTodo(index, newTodo) {
  if (index < 0 || index >= todos.length) {
    throw new Error('Ungültiger Index');
  }
  todos[index] = newTodo;
}

export function deleteTodo(index) {
  if (index < 0 || index >= todos.length) {
    throw new Error('Ungültiger Index');
  }
  todos.splice(index, 1);
}
