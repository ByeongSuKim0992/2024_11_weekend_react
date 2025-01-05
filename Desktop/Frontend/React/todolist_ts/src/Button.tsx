type ButtonProps = {
  func: () => void;
  content: string;
};
const Button = ({ func, content }: ButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#fee000",
    border: "none",
  };
  return (
    <button style={buttonStyle} onClick={func}>
      {content}
    </button>
  );
};

export default Button;
