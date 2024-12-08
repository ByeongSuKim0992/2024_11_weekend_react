const Menu = ({ children }) => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
      }}
    >
      {children}
    </section>
  );
};

export default Menu;
