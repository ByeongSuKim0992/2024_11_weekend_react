import CarInfoText from "./Text/CarInfoText";

const CarInfoList = ({ foodList }) => {
  return (
    <>
      {foodList.map((v) => (
        <CarInfoText info={v} />
      ))}
    </>
  );
};

export default CarInfoList;
