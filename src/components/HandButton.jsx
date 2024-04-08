import HandIcon from "./HandIcon.jsx";

const HandButton = ({ value, onClick }) => {
  const handleClick = () => onClick(value);

  return (
    <button onClick={handleClick} className={"HandButton"}>
      <HandIcon value={value} className={"HandButton-icon"} />
    </button>
  );
};

export default HandButton;
