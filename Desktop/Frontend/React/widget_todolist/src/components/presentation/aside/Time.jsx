import { Flex } from "@radix-ui/themes";
import Clock from "./Clock";
import DateCustom from "./DateCustom";

const Time = () => {
  return (
    <Flex
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "10px",
        width: "100%",
      }}
      direction={"column"}
      gap={"3"}
      align={"center"}
      justify={"center"}
    >
      <DateCustom />
      <Clock />
    </Flex>
  );
};

export default Time;
