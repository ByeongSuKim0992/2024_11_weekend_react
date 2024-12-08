// import { useState } from "react";
// import CharNum from "./compenents/presentation/CharNum";
// import Input from "./compenents/presentation/Input";

import { useEffect, useState } from "react";
import Book from "./compenents/presentation/Book";

// function App() {
//   const [num, setNum] = useState("");
//   const change = (e) => {
//     setNum((prev) => e.target.value.length);
//   };

//   return (
//     <div>
//       <Input change={change} />
//       <CharNum num={num} />
//     </div>
//   );
// }

function App() {
  const [books, setBooks] = useState();

  // 생명주기[태어나고 - 살고 - 죽고]
  // Book[만들어지기 전 - 화면에 있을 때 - 삭제 될 때]
  useEffect(() => {
    fetch("https://fakerapi.it/api/v2/books?_quantity=10")
      .then((response) => response.json())
      .then((v) => setBooks((prev) => [...v.data]));
  }, []);

  return (
    <div>
      {books.map((v) => (
        <Book {...v} />
      ))}
    </div>
  );
}

export default App;
