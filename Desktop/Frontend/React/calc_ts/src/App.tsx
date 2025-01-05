import { useState } from "react";
import Board from "./Board";
import Button from "./Button";

function App() {
  const [value, setValue] = useState<string>("");

  const clear = () => setValue((prev) => "");
  const pasteNumber = (text: string) => setValue((prev) => prev + text);
  const pasteOper = (oper: "+" | "-" | "*" | "/") => {
    setValue((value) =>
      value.split("").some((v) => ["+", "-", "*", "/"].some((op) => v == op))
        ? value
        : value + oper
    );
  };
  const pasteCalc = () => {
    setValue((v) => {
      if (v.includes("+")) {
        const [prefix, suffix] = v.split("+");
        return Number(prefix) + Number(suffix) + "";
      } else if (v.includes("-")) {
        const [prefix, suffix] = v.split("-");
        return Number(prefix) - Number(suffix) + "";
      } else if (v.includes("*")) {
        const [prefix, suffix] = v.split("*");
        return Number(prefix) * Number(suffix) + "";
      } else {
        const [prefix, suffix] = v.split("/");
        return Number(prefix) / Number(suffix) + "";
      }
    });
  };

  return (
    <div style={{ width: "100vw" }}>
      <Board>
        <input
          value={value}
          style={{ gridArea: " 1 / 1 / 2 / 4" }}
          type="text"
        />
        <Button text="Clear" func={() => clear()} />
        <Button text="1" func={() => pasteNumber("1")} />
        <Button text="2" func={() => pasteNumber("1")} />
        <Button text="3" func={() => pasteNumber("1")} />
        <Button text="/" func={() => pasteOper("/")} />
        <Button text="4" func={() => pasteNumber("4")} />
        <Button text="5" func={() => pasteNumber("5")} />
        <Button text="6" func={() => pasteNumber("6")} />
        <Button text="+" func={() => pasteOper("+")} />
        <Button text="7" func={() => pasteNumber("7")} />
        <Button text="8" func={() => pasteNumber("8")} />
        <Button text="9" func={() => pasteNumber("9")} />
        <Button text="-" func={() => pasteOper("-")} />
        <Button text="0" func={() => pasteNumber("0")} />
        <Button text="." func={() => pasteNumber("1")} />
        <Button text="=" func={() => pasteCalc()} />
        <Button text="*" func={() => pasteOper("*")} />
      </Board>
    </div>
  );
}

export default App;
// import { useState } from "react";
// import Board from "./Board";
// import Button from "./Button";

// function App() {
//   const [value, setValue] = useState<string>("");
//   const plusOne = () => {
//     setValue((prev) => prev + "1");
//   };
//   return (
//     <div style={{ width: "100vw" }}>
//       <Board>
//         <input
//           value={value}
//           style={{ gridArea: " 1 / 1 / 2 / 4" }}
//           type="text"
//         />
//         <Button text="clear" func={plusOne} />
//         <Button text="1" func={plusOne} />
//         <Button text="2" func={plusOne} />
//         <Button text="3" func={plusOne} />
//         <Button text="/" func={plusOne} />
//         <Button text="4" func={plusOne} />
//         <Button text="5" func={plusOne} />
//         <Button text="6" func={plusOne} />
//         <Button text="*" func={plusOne} />
//         <Button text="7" func={plusOne} />
//         <Button text="8" func={plusOne} />
//         <Button text="9" func={plusOne} />
//         <Button text="-" func={plusOne} />
//         <Button text="0" func={plusOne} />
//         <Button text="." func={plusOne} />
//         <Button text="=" func={plusOne} />
//         <Button text="*" func={plusOne} />
//       </Board>
//     </div>
//   );
// }

// export default App;
