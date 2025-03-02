/** @format */

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const todos: Todo[] = [
  { id: 1, title: 'Finish React project', completed: false },
  { id: 2, title: 'Review pull requests', completed: true },
  { id: 3, title: 'Write unit tests', completed: false },
  { id: 4, title: 'Update documentation', completed: true },
  { id: 5, title: 'Fix login bug', completed: false },
];

export const fetchTodos = async (query: string = ''): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Fetched Todos');

  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );
};

export const addTodo = async (todo: Pick<Todo, 'title'>): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newTodo: Todo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  todos.push(newTodo);

  return newTodo;
};
