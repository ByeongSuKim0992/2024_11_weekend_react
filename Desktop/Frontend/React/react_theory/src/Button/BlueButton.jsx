const BlueButton = () => {
  // return (
  //   <button
  //     style={{
  //       padding: "12px 35px;",
  //       border: "1px solid #2563EB",
  //       borderRadius: "40px",
  //       backgroundColor: "#2563EB",
  //       color: "white",
  //     }}
  //   >
  //     Button
  //   </button>
  // );
  const css = {
    padding: "12px 35px;",
    border: "1px solid #2563EB",
    borderRadius: "40px",
    backgroundColor: "#2563EB",
    color: "white",
    fontSize: "14px",
  };
  return <button style={css}>Button</button>;
};

export default BlueButton;
