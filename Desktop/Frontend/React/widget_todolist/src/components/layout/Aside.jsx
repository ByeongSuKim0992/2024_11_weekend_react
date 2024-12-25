import { Flex } from "@radix-ui/themes";
import Time from "../presentation/aside/Time";
import Waterbar from "../presentation/aside/Waterbar";
import Weather from "../presentation/aside/Weather";

const Aside = () => {
  return (
    <Flex direction={"column"} style={{ flex: "1" }} align={"center"} gap={"7"}>
      <Time />
      <Waterbar />
      <Weather />
    </Flex>
  );
};

export default Aside;
