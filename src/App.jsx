import { Footer, Header, Main } from "./containers";
import { useGlobalContext } from "./context";

function App() {
  const { overlay } = useGlobalContext();
  return (
    <>
      {overlay && <div className="overlay"></div>}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
