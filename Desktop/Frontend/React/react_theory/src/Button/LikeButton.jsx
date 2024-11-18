// LikeButton.jsx
const LikeButton = () => {
  const youtuber = "코리아 IT";
  const hello = (guest) => `${guest || "guest"}님 환영합니다!`;
  return (
    <div>
      {/* <button>좋아요!</button>
      <button>싫어요!</button> */}
      <button>{hello("백종원")}</button>
      <button>{youtuber} 좋아요!</button>
      <button>{youtuber}싫어요!</button>
      <button>{5 > 3 ? "손흥민" : "김민재"}</button>
    </div>
  );
};

export default LikeButton;
