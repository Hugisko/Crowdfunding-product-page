import "./main.css";
import Monitor from "../monitor/Monitor";
import Progress from "../progress/Progress";
import About from "../about/About";
import { useState } from "react";
import Modal from "../modal/Modal";
import ThankModal from "../thankModal/ThankModal";

const Main = ({ handleOverlay, stats, setStats }) => {
  const [showModal, setShowModal] = useState(false);
  const [showThank, setShowThank] = useState(false);
  const [selectStand, setSelectStand] = useState("");

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleThank = () => {
    setShowThank(!showThank);
  };

  const handleSelection = (id) => {
    setSelectStand(id);
  };

  return (
    <main>
      <div className="main__container">
        <Monitor
          handleModal={handleModal}
          setSelectStand={setSelectStand}
          handleOverlay={handleOverlay}
        />
        <Progress stats={stats} />
        <About
          handleModal={handleModal}
          handleSelection={handleSelection}
          handleOverlay={handleOverlay}
        />
      </div>
      {showModal && (
        <Modal
          handleModal={handleModal}
          selectStand={selectStand}
          handleThank={handleThank}
          handleOverlay={handleOverlay}
          setStats={setStats}
          stats={stats}
        />
      )}
      {showThank && (
        <ThankModal handleThank={handleThank} handleOverlay={handleOverlay} />
      )}
    </main>
  );
};

export default Main;
