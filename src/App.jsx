import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/navbar";
import About from "./component/About/about";
import Rps from "./component/Rps/Rps";
import Tictac from "./component/TicTac/tictac";
import Card from "./component/Card/card";
import Home from "./component/Home/home";
import Footer from "./component/Footer/footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tictac" element={<Tictac />} />
          <Route path="/rps" element={<Rps />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
