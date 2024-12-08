const Coffee = ({ image, title }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{ width: "100px", height: "100px", border: "1px solid black" }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={image}
          alt=""
        />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default Coffee;
