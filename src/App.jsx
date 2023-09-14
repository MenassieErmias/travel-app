// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";

// IMPORT REACT
import { useState } from "react";

// TODO : MAKE THE NAV APPEAR SMOOTHLY WHEN THE STATE CHANGES

function App() {
  // STATE
  const [displayNav, setDisplayNav] = useState(false);
  console.log(`display Nav state: ${displayNav}`);
  return (
    <div className="app">
      {
        displayNav ?
          <Navigation setDisplayNav={setDisplayNav} displayNav={displayNav} /> :
          <Header
            setDisplayNav={setDisplayNav}
            displayNav={displayNav}
          />
      }
      <Home />
      <Footer />
    </div>
  );
}

export default App;
