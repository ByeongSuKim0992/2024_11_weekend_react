import { Box, Flex } from "@radix-ui/themes";
import Todo from "../presentation/Todo";

const List = ({ list, func }) => {
  return (
    <Box style={{ backgroundColor: "white", borderRadius: "10px" }} p={"5"}>
      <Flex gap={"3"} direction={"column"}>
        {list.map((v, i) => (
          <Todo todo={v} remove={() => func(i)} />
        ))}
      </Flex>
    </Box>
  );
};

export default List;
