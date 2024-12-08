import { useRef } from "react";
import { FormWrapper, InputBox, GoButton } from "./InputField.styled";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormWrapper
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <InputBox
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <GoButton type="submit">Go</GoButton>
    </FormWrapper>
  );
};

export default InputField;
