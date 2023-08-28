import "./modal.css";
import close_btn from "../../assets/icon-close-modal.svg";
import { ModalStand } from "../../components";
import { useEffect, useState, useRef } from "react";

const Modal = ({
  handleModal,
  selectStand,
  handleThank,
  handleOverlay,
  setStats,
  stats,
}) => {
  const [selectedStand, setSelectedStand] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    setSelectedStand(selectStand);
  }, [selectStand]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModal();
        handleOverlay();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const handleSelection = (id, left) => {
    if (left === "0") return;
    setSelectedStand(id);
  };

  const handleClose = () => {
    handleModal();
    handleOverlay();
  };

  return (
    <div className="modal__container" ref={modalRef}>
      <div className="modal__heading">
        <h3>Back this project</h3>
        <div className="modal__heading-img" onClick={handleClose}>
          <img src={close_btn} alt="close-modal-btn" />
        </div>
      </div>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className="modal__stands-container">
        <ModalStand
          title="Pledge with no reward"
          info="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
          handleSelection={handleSelection}
          selectedStand={selectedStand}
          handleModal={handleModal}
          handleThank={handleThank}
          setStats={setStats}
          stats={stats}
        />
        <ModalStand
          title="Bamboo Stand"
          pledge="25"
          info="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          leftNumber="101"
          handleSelection={handleSelection}
          selectedStand={selectedStand}
          handleModal={handleModal}
          handleThank={handleThank}
          setStats={setStats}
          stats={stats}
        />
        <ModalStand
          title="Black Edition Stand"
          pledge="75"
          info="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          leftNumber="64"
          handleSelection={handleSelection}
          selectedStand={selectedStand}
          handleModal={handleModal}
          handleThank={handleThank}
          setStats={setStats}
          stats={stats}
        />
        <ModalStand
          title="Mahogany Special Edition"
          pledge="200"
          info="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          leftNumber="0"
          handleSelection={handleSelection}
          selectedStand={selectedStand}
          handleModal={handleModal}
          handleThank={handleThank}
          setStats={setStats}
        />
      </div>
    </div>
  );
};

export default Modal;
