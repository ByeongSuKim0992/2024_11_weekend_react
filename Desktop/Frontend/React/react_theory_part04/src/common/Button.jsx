// const Button = () => {
//   const hello = () => {
//     alert("안녕!");
//   };

//   return (
//     <button onClick={() => hello()} className="p-3 bg-sky-400 border-r-2">
//       버튼
//     </button>
//   );
// };

// export default Button;

// Quiz
// props로 커피이름을 받으면
// 버튼안의 컨텐츠를 커피이름이 나오고
// 클릭하면 alert ~~ 커피 주문 하셨습니다!

// const Button = (props) => {
//   const hello = () => {
//     alert(`${props.coffeeName}커피를 주문 하셨습니다!`);
//   };

//   return (
//     <button onClick={() => hello()} className="p-3 bg-sky-400 border-r-2">
//       {props.coffeeName}
//     </button>
//   );
// };

// export default Button;

// const Button = ({ coffeeName }) => {
//   const hello = () => {
//     alert(`${coffeeName}커피를 주문 하셨습니다!`);
//   };

//   return (
//     <button onClick={() => hello()} className="p-3 bg-sky-400 border-r-2">
//       {coffeeName}
//     </button>
//   );
// };

// export default Button;

const Button = ({ num, coffeeName }) => {
  const hello = (x) => {
    alert(`${x}개 ${coffeeName}커피를 주문 하셨습니다!`);
  };

  return (
    <button onClick={() => hello(num)} className="p-3 bg-sky-400 border-r-2">
      {coffeeName}
    </button>
  );
};

export default Button;
