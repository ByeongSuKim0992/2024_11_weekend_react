import { useState } from "react";
import Button from "../atom/Button";
import Input from "../atom/Input";

type AddToDoProps = {
  func: (todo: string) => void;
};

const AddToDo = ({ func }: AddToDoProps) => {
  const [value, setValue] = useState<string>("");
  const change = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue((prev) => e.target.value);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        padding: "10px 20px",
      }}
    >
      <Input change={change} placeholder="Add a new Task..." />
      <Button click={() => func(value)} content="+" />
    </div>
  );
};

export default AddToDo;
