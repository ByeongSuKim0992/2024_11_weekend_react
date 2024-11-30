// Quiz
// Count.jsx
// 숫자와 plus버튼, reset 버튼이 있음
// plus 버튼을 누르면 숫자가 올라감
// reset 버튼은 다시 원래로 돌아감
// 숫자는 프롭스로 받아 주세요!

import { useState } from "react";

const Count = (props) => {
  const [num, setNum] = useState(props.num);

  const up = () => {
    setNum((v) => {
      return v + 1;
    });
  };

  const reset = () => {
    setNum((v) => {
      return props.num;
    });
  };

  return (
    <>
      <span className="p-2 border-black">{num}</span>
      <button onClick={up} className="p-2 border-black">
        plus
      </button>
      <button onClick={reset} className="p-2 border-black">
        reset
      </button>
    </>
  );
};

export default Count;
