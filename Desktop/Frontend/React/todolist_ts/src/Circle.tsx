type CircleProps = {
  backgroundColor: "pink" | "skyblue" | "green";
  size: "small" | "medium" | "large";
};
const Circle = ({ backgroundColor, size }: CircleProps) => {
  const sizeObj = {
    small: 50,
    medium: 100,
    large: 200,
  };
  return (
    <div
      style={{
        width: sizeObj[size] + "px",
        height: sizeObj[size] + "px",
        borderRadius: "9999px",
        backgroundColor,
      }}
    ></div>
  );
};

export default Circle;
