const Text = (props) => {
  return (
    <span style={{ fontSize: "20px", color: props.color || "black" }}>
      {props.name || "Guest"}
    </span>
  );
};

export default Text;
