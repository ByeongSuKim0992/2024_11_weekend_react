const CarNumberText = (props) => {
  return (
    <span
      style={{
        fontWeight: "bold",
        fontSize: "28px",
      }}
    >
      {props.carNumber}
    </span>
  );
};

export default CarNumberText;
