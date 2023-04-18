import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

//Pages
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";
//Components
import NavBar from "./Components/NavBar";



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
      {/* </header> */}
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
