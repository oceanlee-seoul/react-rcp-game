import rockImg from "../assets/rock.svg";
import scissorImg from "../assets/scissor.svg";
import paperImg from "../assets/paper.svg";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

const HandIcon = ({ value, className }) => {
  const src = IMAGES[value];
  return (
    <img
      style={{ backgroundColor: "black" }}
      src={src}
      alt={value}
      className={className}
    />
  );
};

export default HandIcon;
