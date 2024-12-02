//Quiz

import { useState } from "react";

// Password.jsx
// 1. 두개의 input 태그가 있고 서로의 input 내용이 같으면
// 2. 아래 버튼이 일치로 바뀌고 아니면 불일치

// const Password = () => {
//   const [password, setPassword] = useState("");
//   const [passwordCheck, setPasswordCheck] = useState("");
//   const [isSame, setIsSame] = useState(false);

//   const changePassword = (e) => {
//     const { value } = e.target;
//     setPassword((prev) => {
//       return value;
//     });
//   };

//   const changePasswordCheck = (e) => {
//     const { value } = e.target;
//     setPasswordCheck((prev) => {
//       return value;
//     });
//   };
const Password = () => {
  const [check, setCheck] = useState({
    password: "",
    passwordCheck: "",
    isSame: true,
  });

  const change1 = (e) => {
    const { value } = e.target;
    setCheck((prev) => {
      return { ...prev, password: value, isSame: value == prev.passwordCheck };
    });
  };

  const change2 = (e) => {
    const { value } = e.target;
    setCheck((prev) => {
      return { ...prev, passwordCheck: value, isSame: value == prev.password };
    });
  };

  return (
    <>
      <div className="border border-black p-2">
        <span>비밀번호</span>
        <input onChange={(e) => change1(e)} type="text" />
      </div>
      <div className="border border-black p-2">
        <span>비밀번호확인</span>
        <input onChange={(e) => change2(e)} type="text" />
      </div>
      <button
        className={`p-1 ${check.isSame ? "bg-slate-500" : "bg-slate-300"}`}
      >
        {check.isSame ? "일치" : "불일치"}
      </button>
    </>
  );
};

export default Password;

// import { useState } from "react";
// import PasswordInput from "../common/Input/PasswordInput";
// import ValidButton from "../common/Buttons/ValidButton";

// const Password = () => {
//   const [check, setCheck] = useState({
//     password: "",
//     passwordCheck: "",
//     isValid: true,
//   });

//   const change1 = (e) => {
//     const { value } = e.target;
//     setCheck((prev) => {
//       return { ...prev, password: value, isValid: value == prev.passwordCheck };
//     });
//   };

//   const change2 = (e) => {
//     const { value } = e.target;
//     setCheck((prev) => {
//       return { ...prev, passwordCheck: value, isValid: value == prev.password };
//     });
//   };

//   return (
//     <>
//       <PasswordInput text={"비밀번호"} change={(e) => change1(e)} />
//       <PasswordInput text={"비밀번호 확인"} change={(e) => change2(e)} />
//       <ValidButton check={check} />
//     </>
//   );
// };

// export default Password;
