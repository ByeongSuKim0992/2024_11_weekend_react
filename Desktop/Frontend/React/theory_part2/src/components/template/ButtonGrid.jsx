import Button from "../Button/Button";

const ButtonGrid = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
      }}
    >
      <Button backgroundColor="primary" borderRadius="hard" />
      <Button backgroundColor="primary" borderRadius="smooth" />
      <Button backgroundColor="primary" borderRadius="circle" />
      <Button backgroundColor="hover" borderRadius="hard" />
      <Button backgroundColor="hover" borderRadius="smooth" />
      <Button backgroundColor="hover" borderRadius="circle" />
      <Button backgroundColor="deactive" borderRadius="hard" />
      <Button backgroundColor="deactive" borderRadius="smooth" />
      <Button backgroundColor="deactive" borderRadius="circle" />
    </div>
  );
};

export default ButtonGrid;
