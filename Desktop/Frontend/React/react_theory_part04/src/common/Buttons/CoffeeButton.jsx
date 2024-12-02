const CoffeeButton = ({ coffee, isSelected, change }) => {
  return (
    <button
      onClick={change}
      className={`px-2 py-3 text-base text-slate-600
        ${isSelected ? "bg-blue-400" : "bg-white"}
        `}
    >
      {coffee}
    </button>
  );
};

export default CoffeeButton;
