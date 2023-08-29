import { useGlobalContext } from "../../context";
import Button from "../button/Button";
import "./stand.css";

const Stand = ({ title, info, pledge, leftNumber, btn }) => {
  const {
    handleOverlay,
    handleSelection,
    isMountedModal,
    setIsMountedModal,
    handleModal,
  } = useGlobalContext();
  const handleBtn = () => {
    if (leftNumber === "0") {
      return;
    }
    setIsMountedModal(!isMountedModal);
    handleModal();
    handleOverlay();
    handleSelection(title);
  };

  return (
    <div className={`${leftNumber === "0" ? "stand empty" : "stand"}`}>
      <div className="stand__heading">
        <h4>{title}</h4>
        <span>Pledge ${pledge} or more</span>
      </div>
      <p>{info}</p>
      <div className="stand__footer">
        <p className="stand__left">
          <span>{leftNumber}</span> left
        </p>
        <Button title={btn} handleBtn={handleBtn} />
      </div>
    </div>
  );
};

export default Stand;
