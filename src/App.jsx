import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/navbar";
import Counter from "./component/About/counter";
import About from "./component/Rps/Rps";
import Tictac from "./component/TicTac/tictac";
import Card from "./component/Card/card";
import Home from "./component/Home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
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
