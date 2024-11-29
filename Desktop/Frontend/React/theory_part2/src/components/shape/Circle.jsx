const Circle = (props) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "9999px",
        backgroundColor: props.backgroundColor,
      }}
    ></div>
  );
};

export default Circle;
