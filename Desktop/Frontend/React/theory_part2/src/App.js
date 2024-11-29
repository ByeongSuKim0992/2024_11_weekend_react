import CarCard from "./components/CarCard";

function App() {
  const data = [
    { state: "unComp", carName: "테슬라", carNumber: "12가4523" },
    { state: "await", carName: "셀토스", carNumber: "45가4113" },
    { state: "unComp", carName: "모닝", carNumber: "56가4223" },
    { state: "unComp", carName: "테슬라", carNumber: "12가4523" },
    { state: "await", carName: "셀토스", carNumber: "45가4113" },
    { state: "unComp", carName: "모닝", carNumber: "56가4223" },
  ];

  return (
    <>
      {data.map((v) => (
        <CarCard {...v} />
        // <CarCard carName={v.carName} state={v.state} carNumber={v.carNumber} />
      ))}
    </>
  );
}

export default App;
