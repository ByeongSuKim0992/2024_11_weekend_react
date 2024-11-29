import Button from "./Button";

const StateButton = ({ contents, isSelected }) => {
  return (
    <Button
      style={{
        padding: "10px 40px",
        border: "1px solid black",
        backgroundColor: isSelected ? "black" : "white",
        color: isSelected ? "white" : "black",
      }}
      contents={contents}
    />
  );
};

export default StateButton;
