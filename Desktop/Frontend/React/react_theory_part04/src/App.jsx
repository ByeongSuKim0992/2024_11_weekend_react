import Icon from "./presentation/icon/Icon";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Button from "./common/Button";
import Toggle from "./common/Toggle";
import FruitsButton from "./common/FruitsButton";
import Count from "./common/Count";
import Input from "./common/Input";
import Register from "./common/Register";

// js jsx[html + js]
function App() {
  return (
    <div className="App">
      {/* <Icon icon={<FaHome />} title={"Home"} />
      <Icon icon={<FaSearch />} title={"Search"} />
      <Button num={10} coffeeName={"플랫화이트"} />
      <Button num={3} coffeeName={"아메리카노"} /> */}
      {/* <Toggle /> */}
      {/* <FruitsButton a={"🍒"} b={"🍏"} />
      <FruitsButton a={"🍕"} b={"🍔"} /> */}
      <Count num={0} />
      <Input />
      <Register />
    </div>
  );
}

export default App;
