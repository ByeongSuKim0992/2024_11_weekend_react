import { useState } from "react";
import CoffeeButton from "../common/Buttons/CoffeeButton";

const Coffee = () => {
  const [coffee, setCoffee] = useState([false, false, false, false]);

  const change = (num) => {
    setCoffee((prev) => {
      const newArr = prev.map((v, i) => i == num);
      return newArr;
    });
  };

  return (
    <div className="flex">
      {["전체", "커피", "논커피", "더치커피"].map((v, i) => (
        <CoffeeButton
          change={() => change(i)}
          coffee={v}
          isSelected={coffee[i]}
        />
      ))}
    </div>
  );
};

export default Coffee;
