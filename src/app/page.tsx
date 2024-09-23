'use client'
import ToDoForm from "@/components/todoform";
import { gql, useQuery } from "@apollo/client";

interface todo {
  id: number;
  description: string;
  complete?: boolean;
}

export default function Home() {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;
  return (
    <>
      <h1>Your ToDos:</h1>
      <ul>
        {data.todos.map((todo: todo) => {
          <li key={todo.id}>
            {todo.description} {todo.complete ? "Completed!" : "Incomplete"}
          </li>;
        })}
      </ul>
      <h4>Add a ToDo:</h4>
      <ToDoForm />
    </>
  );
}

const GET_TODOS = gql`
  query getAllToDos {
    ToDos {
      id
      description
      complete
    }
  }
`;
