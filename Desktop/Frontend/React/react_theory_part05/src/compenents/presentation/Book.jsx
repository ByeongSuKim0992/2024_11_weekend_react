const Book = ({ title, published }) => {
  return (
    <div
      style={{
        width: "fit-content",
        padding: "20px",
        border: "1px solid black",
      }}
    >
      <span>{title}</span>
      <span>{published}</span>
    </div>
  );
};

export default Book;
