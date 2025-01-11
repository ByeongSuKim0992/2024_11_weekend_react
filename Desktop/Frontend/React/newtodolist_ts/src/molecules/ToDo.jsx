import { useState } from "react";
import CheckBox from "../atom/CheckBox";
import Label from "../atom/Label";
import { FaTrash } from "react-icons/fa";

type ToDoProps = {
  label: string,
};

const ToDo = ({ label }: ToDoProps) => {
  const [isDone, setIsDone] = useState(false);
  const func = () => setIsDone((prev) => !prev);

  return (
    <li style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <CheckBox change={func} checked={isDone} />
        <Label label={label} isDone={isDone} />
      </div>
      <FaTrash />
    </li>
  );
};

export default ToDo;
