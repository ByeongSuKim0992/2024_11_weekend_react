import { Box, Flex } from "@radix-ui/themes";
import Title from "../presentation/todolist/Title";
import Input from "../presentation/todolist/Input";
import Todo from "../presentation/todolist/Todo";
import { useState } from "react";

const Todolist = () => {
  const [todoes, setTodoes] = useState([]);
  const [text, setText] = useState("");
  const change = (e) => setText((prev) => e.target.value);
  const add = () => {
    setTodoes((prev) => [...prev, text]);
  };

  const remove = (i) => {
    setTodoes((prev) => {
      const newArr = prev.filter((v, idx) => i !== idx);
      return newArr;
    });
  };

  return (
    <Box style={{ flex: "2" }}>
      <Title />
      <Input inputFunc={change} addFunc={add} />
      <Flex p={"4"} direction={"column"} gap={"3"}>
        {todoes.map((v, i) => (
          <Todo task={v} removeFunc={() => remove(i)} />
        ))}
      </Flex>
    </Box>
  );
};

export default Todolist;
