// import { useState } from "react";
// import CharNum from "./compenents/presentation/CharNum";
// import Input from "./compenents/presentation/Input";

// import { useState } from "react";
// import Company from "./compenents/presentation/Company";

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

// import { useEffect, useState } from "react";
// import Book from "./compenents/presentation/Book";

// function App() {
//   const [books, setBooks] = useState([]);

// Web API[console, dom, storage, fetch, setinteral, settimeout]

// 생명주기[태어나고 - 살고 - 죽고]
// Book[만들어지기 전 - 화면에 있을 때 - 삭제 될 때]
//   useEffect(() => {
//     fetch("https://fakerapi.it/api/v2/books?_quantity=10")
//       .then((response) => response.json())
//       .then((v) => setBooks((prev) => [...v.data]));
//   }, []);

//   return (
//     <div>
//       {books.map((v) => (
//         <Book {...v} />
//       ))}
//     </div>
//   );
// }

// function app() {
//   const [books, setBooks] = useState([]);
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     fetch("https://fakerapi.it/api/v2/books?_quantity=10")
//       .then((response) => response.json())
//       .then((v) => setBooks((prev) => [...v.data]));

//     fetch("https://fakerapi.it/api/v2/companies?_quantity=10")
//       .then((response) => response.json())
//       .then((v) => setCompanies((prev) => [...v.data]));
//   }, []);

//   return (
//     <div>
//       {books.map((v) => (
//         <Book {...v} />
//       ))}
//       {companies.map((v) => (
//         <Company {...v} />
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import Coffee from "./components/presentation/Coffee";
import Menu from "./components/layout/Menu";

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((v) => setCoffees((prev) => [...v]));
  }, []);

  return (
    <Menu
      children={coffees.map((v) => (
        <Coffee {...v} />
      ))}
    />
  );
}

export default App;
