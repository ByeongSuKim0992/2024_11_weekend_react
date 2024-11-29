import { stateMap } from "../style/car";
import CarNumberText from "./typo/CarNumberText";
import CarState from "./typo/CarState";
import CarText from "./typo/CarText";

const CarCard = (props) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "20px",
        backgroundColor: stateMap[props.state].bg,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarText carName={props.carName} />
        <CarState state={props.state} />
      </div>
      <CarNumberText carNumber={props.carNumber} />
    </section>
  );
};

export default CarCard;
