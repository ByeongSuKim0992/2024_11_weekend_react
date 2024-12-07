const Input = ({ change }) => {
  // const [num, setNum] = useState("");
  // const change = (e) => {
  //   setNum((prev) => e.target.value.length);
  // };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "8px 5px",
        width: "fit-content",
      }}
    >
      <input
        onChange={(e) => change(e)}
        // onChange={change}
        style={{ border: "none" }}
        type="text"
      />
      {/* <span>{num}</span> */}
    </div>
  );
};

export default Input;
