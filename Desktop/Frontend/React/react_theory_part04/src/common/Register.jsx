// Register.jsx
// 아이디만들기 input 태그
// 1. 글자수가 4~12 글자 사이 => 글자 수가 맞지 않습니다.
// 2. 특수문자 @#&가 하나 포함해야함 => 특수문자가 필요합니다.
// 모두 통과되면 => 아이디가 유효합니다!
import { useState } from "react";
const Register = () => {
  const [msg, setMsg] = useState("");
  const change = (e) => {
    const { value } = e.target;
    setMsg((v) => {
      if (value.length < 4 || 12 < value.length)
        return "글자 수가 맞지 않습니다.";
      else if (
        !value.includes("@") &&
        !value.includes("#") &&
        !value.includes("&")
      )
        return "특수문자가 필요합니다.";
      else return "아이디가 유효합니다.";
    });
  };
  return (
    <>
      <input onChange={(e) => change(e)} type="text" />
      <span>{msg}</span>
    </>
  );
};

export default Register;
