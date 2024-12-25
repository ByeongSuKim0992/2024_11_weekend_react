import { Button } from "@radix-ui/themes";

const DoneButton = ({ isDone, func }) => {
  return (
    <Button color={isDone ? "red" : "blue"} onClick={func}>
      {isDone ? "완료" : "미완료"}
    </Button>
  );
};

export default DoneButton;
