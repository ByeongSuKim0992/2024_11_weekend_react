import Icon from "./presentation/icon/Icon";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Button from "./common/Buttons/Button";
import Toggle from "./common/Buttons/Toggle";
import FruitsButton from "./common/Buttons/FruitsButton";
import Count from "./container/Count";
import Input from "./common/Input/Input";
import Register from "./container/Register";
import Review from "./container/Review";
import Password from "./container/Password";
import DarkMode from "./common/Buttons/DarkMode";
import StatusButton from "./common/Buttons/StatusButton";
import Select from "./container/Select";

// js jsx[html + js]
// function App() {
//   return (
//     <div className="App">
//       {/* <Icon icon={<FaHome />} title={"Home"} />
//       <Icon icon={<FaSearch />} title={"Search"} />
//       <Button num={10} coffeeName={"플랫화이트"} />
//       <Button num={3} coffeeName={"아메리카노"} /> */}
//       {/* <Toggle /> */}
//       {/* <FruitsButton a={"🍒"} b={"🍏"} />
//       <FruitsButton a={"🍕"} b={"🍔"} /> */}
//       {/* <Count num={0} />
//       <Input />
//       <Register /> */}
//       {/* <Review /> */}
//       {/* <Password /> */}
//       {/* <DarkMode /> */}
//       <StatusButton text={"OK"} />
//       <StatusButton text={"NG"} />
//       <StatusButton text={"미해당"} />
//     </div>
//   );
// }
function App() {
  return (
    <div className="flex flex-col gap-2">
      <Select menu={["민트", "초코", "딸기", "바나나", "키위"]} />
      <Select menu={["치즈", "우유", "코코넛"]} />
      <Select menu={["OK", "NG", "미해당"]} />
      <Password />
    </div>
  );
}

export default App;
