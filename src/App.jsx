import { useState } from "react";
import { Footer, Header, Main } from "./containers";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [stats, setStats] = useState({ backed: 89914, total: 5007 });
  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <>
      {overlay && <div className="overlay"></div>}
      <Header handleOverlay={handleOverlay} />
      <Main handleOverlay={handleOverlay} stats={stats} setStats={setStats} />
      <Footer />
    </>
  );
}

export default App;
