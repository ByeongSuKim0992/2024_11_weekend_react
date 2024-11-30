// const Input = () => {
//   const change = (e) => {
//     console.log(e.target.value);
//   };

//   return (
//     <>
//     <input onChange={(e) => change(e)} type="text" />
//     </>
//   );
// };

import { useState } from "react";
//Quiz 1
// input의 글자 수
// span태그에 실시간으로 나타내기

// const Input = () => {
//   const [num, setNum] = useState(0);

//   const change = (e) => {
//     setNum((v) => {
//       return e.target.value.length;
//     });
//   };
//   return (
//     <>
//       <input onChange={(e) => change(e)} type="text" />
//       <span>{num}</span>
//     </>
//   );
// };

//Quiz 2
//10글자 넘어가면 숫자가 빨간색으로
const Input = () => {
  const [num, setNum] = useState(0);
  const [isOver10, setIsOver10] = useState(false);

  const change = (e) => {
    setNum((v) => {
      return e.target.value.length;
    });

    setIsOver10((v) => {
      return e.target.value.length > 10;
    });
  };

  return (
    <>
      <input onChange={(e) => change(e)} type="text" />
      <span style={{ color: isOver10 ? "red" : "black" }}>{num}</span>
    </>
  );
};

export default Input;
