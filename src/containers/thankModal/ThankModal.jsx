import "./thankModal.css";
import checkImg from "../../assets/icon-check.svg";
import { Button } from "../../components";

const ThankModal = ({ handleThank, handleOverlay }) => {
  const handleBtn = () => {
    handleThank();
    handleOverlay();
  };
  return (
    <div className="thankModal__container">
      <div className="thankModal__img">
        <img src={checkImg} alt="check icon" />
      </div>
      <h3>Thanks for your support!</h3>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <Button title="Got it!" handleBtn={handleBtn} />
    </div>
  );
};

export default ThankModal;
