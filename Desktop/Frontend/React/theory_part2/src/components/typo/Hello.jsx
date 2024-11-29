const Hello = (props) => {
  return (
    <div>
      <span>이름 {props.data.name}님 안녕하세요</span>
      <span>나이가 {props.data.age}이시군요!</span>
      <span>{props.data.isVIP ? "VIP" : "일반"} 회원님 환영합니다!</span>
    </div>
  );
};

export default Hello;
