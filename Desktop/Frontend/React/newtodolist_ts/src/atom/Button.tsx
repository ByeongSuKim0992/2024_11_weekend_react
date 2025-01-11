type ButtonProps = {
  content: string;
  click: () => void;
};

const Button = ({ content, click }: ButtonProps) => {
  return (
    <button
      onClick={click}
      style={{ padding: "10px", color: "white", border: "none" }}
    >
      {content}
    </button>
  );
};

export default Button;
