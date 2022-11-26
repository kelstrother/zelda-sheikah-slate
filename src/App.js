import RupeeContainer from "./components/RupeeContainer";
import HeartsContainer from "./components/HeartsContainer"

const App = () => {
  return (
    <div className="app-container">
      <header className="header-container">
        <HeartsContainer />
        <h1 className="inventory-title">Inventory</h1>
        <RupeeContainer />
      </header>
      <div className=""></div>
      <footer className="footer-container"></footer>
    </div>
  );
}

export default App;
