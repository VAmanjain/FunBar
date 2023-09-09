
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/navbar";
import Counter from "./component/About/counter";
import FirstComp from "./component/Home/first-comp";

import About from "./component/Rps/Rps";

import Tictac from "./component/TicTac/tictac";
import Card from "./component/Card/card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<FirstComp />} />
          <Route path="/counter" element={<Counter />} />

          <Route path="/tictac" element={<Tictac />} />

          <Route path="/about" element={<About />} />

          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
