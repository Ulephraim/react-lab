/** @format */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTodo, fetchTodos } from '../..';
import { useState } from 'react';

function Query() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>('');
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ['todos'],
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle('');
            } catch (e) {
              console.error(e);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <div>
        {todos?.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </div>
    </>
  );
}

export default Query;
