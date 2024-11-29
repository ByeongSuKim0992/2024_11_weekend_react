import { stateMap } from "../../style/car";

const CarState = (props) => {
  return (
    <span style={{ fontWeight: "bold", color: stateMap[props.state].color }}>
      {stateMap[props.state].text}
    </span>
  );
};

export default CarState;
