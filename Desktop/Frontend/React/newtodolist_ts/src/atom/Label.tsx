export type LabelProps = {
  label: string;
  isDone: boolean;
};

const Label = ({ label, isDone }: LabelProps) => {
  return (
    <label style={{ textDecoration: isDone ? "line-through" : "" }}>
      {label}
    </label>
  );
};

export default Label;
