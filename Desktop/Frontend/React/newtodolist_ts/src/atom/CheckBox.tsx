type CheckBoxProps = {
  change: () => void;
  checked: boolean;
};

const CheckBox = ({ change, checked }: CheckBoxProps) => {
  return <input checked={checked} type="checkbox" onChange={change} />;
};

export default CheckBox;
