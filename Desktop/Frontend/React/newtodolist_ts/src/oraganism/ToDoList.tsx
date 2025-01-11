import ToDo from "../molecules/ToDo";

type ToDoListProps = {
  toDoes: string[];
};

const ToDoList = ({ toDoes }: ToDoListProps) => {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        padding: "10px 20px",
      }}
    >
      {toDoes.map((v) => (
        <ToDo label={v} />
      ))}
    </ul>
  );
};

export default ToDoList;
