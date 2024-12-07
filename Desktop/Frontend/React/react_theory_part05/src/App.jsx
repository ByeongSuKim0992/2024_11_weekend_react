import { useState } from "react";
import CharNum from "./compenents/presentation/CharNum";
import Input from "./compenents/presentation/Input";

function App() {
  const [num, setNum] = useState("");
  const change = (e) => {
    setNum((prev) => e.target.value.length);
  };

  return (
    <div>
      <Input change={change} />
      <CharNum num={num} />
    </div>
  );
}

export default App;
