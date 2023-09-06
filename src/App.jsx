import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/navbar";
import Counter from "./component/counter";
import FirstComp from "./component/first-comp";

import About from "./component/Rps";

import Tictac from "./component/tictac";
import Card from "./component/card";

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
