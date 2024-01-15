import { v4 as uuid } from 'uuid';

export type Todo = {
  name: string;
  id: string;
  done: boolean;
};

let todos: Array<Todo> = [
  {
    name: 'item1',
    id: uuid(),
    done: false,
  },
  {
    name: 'item2',
    id: uuid(),
    done: true,
  },
];

export function getTodos() {
  return todos;
}

export function addTodo(name: string) {
  const newTodo = {
    name,
    id: uuid(),
    done: false,
  };

  todos.push(newTodo);

  return newTodo;
}

export function deleteById(id: string) {
  todos = todos.filter((t) => t.id !== id);
}

export function getTodoById(id: string) {
  return todos.find((t) => t.id === id);
}

export function updateTodo(id: string, todo: Partial<Todo>) {
  todos = todos.map((t) => (t.id === id ? { ...t, ...todo } : t));

  return todos.find((t) => t.id === id);
}
