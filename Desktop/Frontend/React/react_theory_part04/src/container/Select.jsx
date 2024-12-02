// import { useState } from "react";
// import StatusButton from "../common/Buttons/StatusButton";

// const Select = ({ menu }) => {
//   // const [buttons, setButtons] = useState([false, false, false]);
//   const [buttons, setButtons] = useState(
//     Array(menu.length)
//       .fill()
//       .map((v) => false)
//   );

//   // const change = (num) => {
//   //   setButtons((prev) => {
//   //     // prev.map((v, i)=> {
//   //     //   return num == i;
//   //     const newArr = prev.map((v, i) => num == i);
//   //     return newArr;
//   //   });
//   // };

//   // const change1 = () => {
//   //   setButtons((prev) => {
//   //     // const newArr = prev.map((v, i) => {
//   //     // if (i == 0) return true;
//   //     // else return false;

//   //     // return i == 0 ? true : false

//   //     // return i == 0;

//   //     const newArr = prev.map((v, i) => i == 0);
//   //     return newArr;
//   //   });
//   // };

//   // const change2 = () => {
//   //   setButtons((prev) => {
//   //     // const newArr = prev.map((v, i) => {
//   //     //   if (i == 1) return true;
//   //     //   else return false;
//   //     // });
//   //     const newArr = prev.map((v, i) => i == 1);
//   //     return newArr;
//   //   });
//   // };

//   // const change3 = () => {
//   //   setButtons((prev) => {
//   //     const newArr = prev.map((v, i) => i == 2);
//   //     return newArr;
//   //   });
//   // };

//   const change = (x) => {
//     setButtons((prev) => {
//       const newArr = prev.map((v, i) => i == x);
//       return newArr;
//     });
//   };

//   return (
//     // <div className="flex">
//     //   <StatusButton
//     //     change={() => change1(0)}
//     //     isSelected={buttons[0]}
//     //     text={"OK"}
//     //   />
//     //   <StatusButton
//     //     change={() => change2(1)}
//     //     isSelected={buttons[1]}
//     //     text={"NG"}
//     //   />
//     //   <StatusButton
//     //     change={() => change3(2)}
//     //     isSelected={buttons[2]}
//     //     text={"미해당"}
//     //   />
//     // </div>
//     <div className="flex">
//       {/* {["OK", "NG", "미해당"].map((v, i) => ( */}
//       {menu.map((v, i) => (
//         <StatusButton
//           change={() => change(i)}
//           isSelected={buttons[i]}
//           text={v}
//         />
//       ))}
//       {/* <StatusButton
//         change={() => change(0)}
//         isSelected={buttons[0]}
//         text={"OK"}
//       />
//       <StatusButton
//         change={() => change(1)}
//         isSelected={buttons[1]}
//         text={"NG"}
//       />
//       <StatusButton
//         change={() => change(2)}
//         isSelected={buttons[2]}
//         text={"미해당"}
//       /> */}
//     </div>
//   );
// };

// export default Select;

import { useState } from "react";
import StatusButton from "../common/Buttons/StatusButton";

const Select = ({ menu }) => {
  const [buttons, setButtons] = useState(
    Array(menu.length)
      .fill()
      .map((v) => false)
  );
  const change = (x) => {
    setButtons((prev) => {
      const newArr = prev.map((v, i) => i == x);
      return newArr;
    });
  };

  return (
    <div className="flex">
      {menu.map((v, i) => (
        <StatusButton
          change={() => change(i)}
          isSelected={buttons[i]}
          text={v}
        />
      ))}
    </div>
  );
};

export default Select;
