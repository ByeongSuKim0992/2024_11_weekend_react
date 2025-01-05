type ButtonProps = {
  text: string;
  func: () => void;
};

const Button = ({ text, func }: ButtonProps) => {
  return (
    <button
      onClick={func}
      style={{
        backgroundColor: "green",
        padding: "10px",
        fontSize: "20px",
        color: "white",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
