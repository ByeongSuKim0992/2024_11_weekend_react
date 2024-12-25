import { Button, TextField } from "@radix-ui/themes";
import { useState } from "react";

const Input = ({ func }) => {
  const [text, setText] = useState("");
  const change = (e) => setText((prev) => e.target.value);
  const add = () => {
    func(text);
  };

  return (
    <TextField.Root
      onChange={(e) => change(e)}
      placeholder="To Do List 입력하기!"
      size="3"
    >
      <TextField.Slot side="right">
        <Button onClick={() => add()} variant="solid" size={"3"}>
          Add
        </Button>
      </TextField.Slot>
    </TextField.Root>
  );
};

export default Input;
