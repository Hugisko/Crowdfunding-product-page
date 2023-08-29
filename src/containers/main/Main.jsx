import "./main.css";
import Monitor from "../monitor/Monitor";
import Progress from "../progress/Progress";
import About from "../about/About";
import Modal from "../modal/Modal";
import ThankModal from "../thankModal/ThankModal";
import { useGlobalContext } from "../../context";

const Main = () => {
  const { showThank, showModal } = useGlobalContext();

  return (
    <main>
      <div className="main__container">
        <Monitor />
        <Progress />
        <About />
      </div>
      {showModal && <Modal />}
      {showThank && <ThankModal />}
    </main>
  );
};

export default Main;
