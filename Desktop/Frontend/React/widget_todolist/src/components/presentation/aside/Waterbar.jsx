import { Flex, Progress } from "@radix-ui/themes";
import Water from "./Water";
import { useState } from "react";

const Waterbar = () => {
  const [waters, setWaters] = useState(Array(10).fill(false));
  const change = (i) => {
    setWaters((prev) => {
      const newArr = [...prev];
      newArr[i] = !newArr[i];
      return newArr;
    });
  };

  return (
    <Flex
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "10px",
        width: "100%",
      }}
      direction={"column"}
      gap={"3"}
    >
      <Progress value={waters.filter((v) => v == true).length * 10} />
      <Flex justify={"center"} gap={"1"}>
        {waters.map((v, i) => (
          <Water changefunc={() => change(i)} isHydrated={v} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Waterbar;
