// Quiz
// common
// FruitButton.jsx
// props a, b 받아서

import { useState } from "react";

// 버튼누루면 서로 바뀌는 컴포넌트 만들기!
const FruitsButton = ({ a, b }) => {
  const [fruit, setFruit] = useState(a);

  // const change = () => {
  //   setFruit((v) => {
  //     return v == a ? b : a;
  //   });
  // };

  const change = () => setFruit((v) => (v == a ? b : a));

  return (
    <button onClick={change} className="p-1 bg-green-600">
      {fruit}
    </button>
  );
};

export default FruitsButton;
