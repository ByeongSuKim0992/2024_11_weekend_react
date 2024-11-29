import { radiusMap } from "../../style/border";
import { colorMap } from "../../style/color";

const Button = (props) => {
  return (
    <button
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        color: "white",
        padding: "10px 45px",
        border: "none",
        backgroundColor: colorMap[props.backgroundColor],
        borderRadius: radiusMap[props.borderRadius],
      }}
    >
      Button
    </button>
  );
};

export default Button;
