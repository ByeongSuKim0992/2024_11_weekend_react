// company 컴포넌트[name, email] 만들고
// app.jsx에서 useEffect로 활용하여 데이터를 가져오고
// company 컴포넌트를 20개 만드는 퀴즈,

const Company = ({ name, email }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        width: "fit-content",
      }}
    >
      <span>{name}</span>
      <span>{email}</span>
    </div>
  );
};

export default Company;
