import { useState } from "react";
import { InputField } from "./InputField";
import { Wrapper, Heading } from "./TodoList.styled";

import { TodoTypes } from "./types";

const TodoList: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<TodoTypes[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <Wrapper>
      <h1>Task Treak</h1>
      <Heading>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </Heading>
      {todos.map((t) => (
        <li key={t.id}>{t.todo}</li>
      ))}
    </Wrapper>
  );
};
export default TodoList;
