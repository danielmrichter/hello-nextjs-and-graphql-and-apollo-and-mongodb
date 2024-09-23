"use client";

import { useMutation } from "@apollo/client";
import { gql } from "apollo-server-micro";
import { useState } from "react";

export default function ToDoForm() {
  const [description, setDescription] = useState("");

  const ADD_TODO = gql`
    mutation createToDo($description: String!) {
      createToDo(description: $description) {
        description
      }
    }
  `;

  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({ variables: { description: description } });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
    </form>
  );
}
