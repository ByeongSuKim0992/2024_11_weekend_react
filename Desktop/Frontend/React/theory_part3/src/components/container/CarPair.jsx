import CarInfoText from "../Text/CarInfoText";
import CarValueText from "../Text/CarValueText";

const CarPair = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <CarInfoText {...props} />
      <CarValueText {...props} />
    </div>
  );
};

export default CarPair;
