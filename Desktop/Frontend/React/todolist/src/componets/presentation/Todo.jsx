import { TrashIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import DoneButton from "./DoneButton";
import TodoText from "./TodoText";

const Todo = ({ todo, remove }) => {
  const [isDone, setIsDone] = useState(false);
  const click = () => setIsDone((prev) => !prev);

  return (
    <Flex justify={"between"} align={"center"}>
      <DoneButton isDone={isDone} func={() => click()} />
      <TodoText isDone={isDone} todo={todo} />
      <TrashIcon onClick={remove} />
    </Flex>
  );
};

export default Todo;
