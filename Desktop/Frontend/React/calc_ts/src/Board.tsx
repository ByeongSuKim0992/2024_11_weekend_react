type BoardProps = {
  children: React.ReactNode;
};
const Board = ({ children }: BoardProps) => {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "4px",
      }}
    >
      {children}
    </section>
  );
};

export default Board;
