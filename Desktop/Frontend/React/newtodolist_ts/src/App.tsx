import { useState } from "react";
import Text from "./atom/Text";
import AddToDo from "./molecules/AddToDo";
import ToDoList from "./oraganism/ToDoList";

function App() {
  const [todolist, setTodolist] = useState<string[]>([]);
  const addTodo = (todo: string) => setTodolist((prev) => [...prev, todo]);
  return (
    <section
      style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
    >
      <Text text="TO-DO LIST" css={{ fontSize: "30px" }} />
      <AddToDo func={addTodo} />
      <ToDoList toDoes={todolist} />
    </section>
  );
}

export default App;
