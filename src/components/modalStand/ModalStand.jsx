import { useState } from "react";
import Button from "../button/Button";
import "./modalStand.css";

const ModalStand = ({
  title,
  info,
  pledge = null,
  leftNumber = null,
  handleSelection,
  selectedStand,
  handleModal,
  handleThank,
  setStats,
  stats,
}) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleBtn = () => {
    const numbers = /^[0-9]+$/;

    if (!input.match(numbers)) {
      setError(true);
      return;
    }

    const num = parseInt(input);
    const pledgeNum = parseInt(pledge);

    if (num < pledge || num === 0) {
      setError(true);
    } else {
      handleModal();
      handleThank();
      setStats({
        backed: stats.backed + parseInt(input),
        total: stats.total + 1,
      });
      setError(false);
    }
  };

  return (
    <div
      className={`${
        leftNumber === "0" ? "modal__stand empty" : "modal__stand"
      } ${selectedStand === title ? "active" : ""}`}
    >
      <div className="modal__stand-content">
        <span
          className="modal__stand-selection"
          onClick={() => handleSelection(title, leftNumber)}
        >
          <div className="modal__stand-selection__btn"></div>
          <div className="modal__stand-title">
            <h4>{title}</h4>
            {pledge && <p>Pledge ${pledge} or more</p>}
          </div>
          {leftNumber && (
            <p className="modal__stand-left__selection">
              <span>{leftNumber}</span> left
            </p>
          )}
        </span>
        <p>{info}</p>
        {leftNumber && (
          <p className="modal__stand-left">
            <span>{leftNumber}</span> left
          </p>
        )}
      </div>
      {selectedStand === title && leftNumber !== "0" && (
        <div className="modal__stand-form">
          <label htmlFor="modal__stand-form__label">Enter your pledge</label>
          <div className="modal__stand-form__field">
            <input
              className={`${
                error
                  ? "modal__stand-form__field-input error"
                  : "modal__stand-form__field-input"
              }`}
              type="text"
              value={input}
              placeholder={`${pledge || "0.00"}`}
              id="modal__stand-input"
              onChange={(e) => setInput(e.target.value)}
            />
            <Button title="Continue" handleBtn={handleBtn} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalStand;
