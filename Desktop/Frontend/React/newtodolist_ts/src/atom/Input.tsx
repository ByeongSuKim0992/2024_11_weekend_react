type InputProps = {
  placeholder: string;
  change: (msg: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, change }: InputProps) => {
  return (
    <input
      onChange={change}
      style={{ border: "none", width: "100%", outline: "none" }}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
