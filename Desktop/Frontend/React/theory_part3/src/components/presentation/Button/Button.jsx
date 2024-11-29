const Button = ({ contents, style }) => {
  return <button style={{ fontWeight: "bold", ...style }}>{contents}</button>;
};

export default Button;
