import "./thankModal.css";
import checkImg from "../../assets/icon-check.svg";
import { Button } from "../../components";
import { useGlobalContext } from "../../context";

const ThankModal = () => {
  const {
    handleOverlay,
    handleThank,
    isMountedThankModal,
    setIsMountedThankModal,
  } = useGlobalContext();
  const handleBtn = () => {
    setIsMountedThankModal(!isMountedThankModal);
    handleOverlay();
  };

  const mountedStyle = {
    animation: "inAnimationThankModal 0.8s ease-in",
  };
  const unmountedStyle = {
    animation: "outAnimationThankModal 0.8s ease-out",
    animationFillMode: "forwards",
  };

  return (
    <div
      className="thankModal__container"
      style={isMountedThankModal ? mountedStyle : unmountedStyle}
      onAnimationEnd={() => {
        if (!isMountedThankModal) handleThank();
      }}
    >
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
