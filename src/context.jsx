import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [stats, setStats] = useState({ backed: 89914, total: 5007 });
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMountedMenu, setIsMountedMenu] = useState(false);
  const [isMountedModal, setIsMountedModal] = useState(false);
  const [isMountedThankModal, setIsMountedThankModal] = useState(false);
  const [showThank, setShowThank] = useState(false);
  const [selectStand, setSelectStand] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleThank = () => {
    setShowThank(!showThank);
  };

  const handleSelection = (id) => {
    setSelectStand(id);
  };

  const handleOptions = (id, left) => {
    if (left === "0") return;
    setSelectedOption(id);
  };

  return (
    <AppContext.Provider
      value={{
        overlay,
        stats,
        showMenu,
        showModal,
        showThank,
        selectStand,
        selectedOption,
        handleSelection,
        handleOptions,
        handleThank,
        handleOverlay,
        handleModal,
        isMountedMenu,
        isMountedModal,
        isMountedThankModal,
        setShowMenu,
        setStats,
        setSelectStand,
        setSelectedOption,
        setIsMountedMenu,
        setIsMountedModal,
        setIsMountedThankModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
