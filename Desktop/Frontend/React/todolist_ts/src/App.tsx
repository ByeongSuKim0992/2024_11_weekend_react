// import Box from "./Box";
// import Circle from "./Circle";

// Box.tsx
// width:100px, height:100px, backgroundColor: 프롭스로 받아오기
// Circle.tsx
// 배경색: 하늘색 핑크색 초록색 가능
// 사이즈 프롭스 [small, medium, large]
// small -> 50px, 50px
// medium -> 100px, 100px
// large -> 200px, 200px

// function App() {
//   return (
//     <div className="App">
//       <Box backgroundColor="black" />
//       <Circle backgroundColor="green" size="large"></Circle>
//       <Circle backgroundColor="pink" size="small"></Circle>
//     </div>
//   );
// }

// Button.tsx
// Count.tsx 숫자가 올라가는 기능 만드셈
import { useState } from "react";

import Count from "./Count";
import Button from "./Button";

function App() {
  const [count, setCount] = useState<number>(0);
  const plus = () => {
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount((prev) => 0);
  };

  // minus & reset
  return (
    <div>
      <Button func={plus} content={"➕"} />
      <Button func={minus} content={"➖"} />
      <Button func={reset} content={"Reset"} />
      <Count count={count} />
    </div>
  );
}

export default App;
