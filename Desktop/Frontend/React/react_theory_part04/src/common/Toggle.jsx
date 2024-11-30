import { useState } from "react";

const Toggle = () => {
  // 상태 변경(state 변경)
  // const [초깃값, 값을 변경하는 함수] = useState(초깃값);

  //   const [fruit, setFruit] = useState("🍓");

  //   const change = () => {
  //     setFruit((v) => {
  //       return "🍇";
  //     });
  //   };
  //   return (
  //     <button onClick={() => change()} className="p-2 bg-red-300">
  //       {fruit}
  //     </button>
  //   );
  // };

  const [num, setNum] = useState(2);

  const change = () => {
    setNum((v) => {
      return v ** 2;
    });
  };

  return (
    <button onClick={() => change()} className="p-2 bg-red-300">
      {num}
    </button>
  );
};

export default Toggle;
