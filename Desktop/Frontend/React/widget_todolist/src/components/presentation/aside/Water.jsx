import { Box } from "@radix-ui/themes";

const Water = ({ isHydrated, changefunc }) => {
  return <Box onClick={changefunc}> {isHydrated ? "💧" : "🥵"} </Box>;
};

export default Water;
