import BlueButton from "./BlueButton";
import DeepBlueButton from "./DeepBlueButton";
import HeartButton from "./HeartButton";
import Cart from "./Cart";
import LikeButton from "./LikeButton";
import SubscribeButton from "./SubscribeButton";

// 구독 버튼 컴포넌트
// 하트 💛 버튼 컴포넌트

function App() {
  return (
    <div className="App">
      {/* <LikeButton></LikeButton> */}
      {/* <SubscribeButton></SubscribeButton> */}
      <HeartButton></HeartButton>
      <BlueButton></BlueButton>
      <DeepBlueButton></DeepBlueButton>
      <Cart></Cart>
    </div>
  );
}

export default App;
