import "./monitor.css";
import logo from "../../assets/logo-mastercraft.svg";
import { Button } from "../../components";
import { useState } from "react";

const Monitor = ({ handleModal, setSelectStand, handleOverlay }) => {
  const [bookmark, setBookmark] = useState(false);

  const handleBtn = () => {
    handleModal();
    setSelectStand("");
    handleOverlay();
  };

  return (
    <section className="monitor__section section">
      <div className="monitor__img">
        <img src={logo} alt="logo-mastercraft" />
      </div>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="monitor__btn">
        <Button title="Back this project" handleBtn={handleBtn} />
        <button
          type="button"
          className={`${bookmark ? "bookmark active" : "bookmark"}`}
          onClick={() => setBookmark(!bookmark)}
        >
          <div className="bookmark__img">
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
          </div>
          <span>{bookmark ? "Bookmarked" : "Bookmark"}</span>
        </button>
      </div>
    </section>
  );
};

export default Monitor;
