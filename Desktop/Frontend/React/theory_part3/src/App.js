import Item from "./components/container/Item";

function App() {
  return (
    <>
      <Item
        title={"MagSafe"}
        desc={
          "마그네틱 케이스나 카드지갑을 착. 혹은 한꺼번에 둘 다 착.무선 충전도 더 빠르고 효율적으로."
        }
        link={"https://www.apple.com/kr/shop/accessories/all/magsafe"}
        text={"MagSafe 액세서리 쇼핑하기"}
      />
    </>
  );
}

export default App;
