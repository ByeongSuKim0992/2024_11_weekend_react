//Quiz
// reac-icons를 활용해서
// 햇님과 달님 아이콘을 사용하여
// 햇님 아이콘 버튼을 누르면 달님이 나오고, 동시에 alert 화이트모드!
// 달님 아이콘 버든을 누르면 햇님이 나오고, 동시에 alert 다크모드!
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const change = () => {
    alert(isDarkMode ? "화이트모드" : "다크모드");
    setIsDarkMode((v) => {
      return !v;
    });
  };

  return (
    <button onClick={() => change()}>
      {isDarkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
    </button>
  );
};

export default DarkMode;
