import { ColorMap } from "../../style/color";

const CarValueText = ({ value }) => {
  return <span style={{ color: ColorMap.black }}>{value}</span>;
};

export default CarValueText;
