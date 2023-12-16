import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri"; // Changed RxCross2 to RiCloseLine assuming it's the correct icon

function NavBar() {
  const [menu, setMenu] = useState("list");

  return (
    <div className="nav">
      <div className="nav-bar">
        <div className="icon">
          <span>FunBar</span>
        </div>
        <div children="menu-icon">
          <GiHamburgerMenu
            onClick={() => setMenu("list showList")}
            className="openMenu"
          />
        </div>
      </div>
      <div className={menu}>
        <RiCloseLine onClick={() => setMenu("list")} className="closeMenu" />
        <ul>
          <li>
            <Link to="/" onClick={()=> setMenu("list")}>Home</Link>
          </li>
          <li>
            <Link to="/tictac" onClick={()=> setMenu("list")}>Tic Tac</Link>
          </li>
          <li>
            <Link to="/rps" onClick={()=> setMenu("list")}>Rps</Link>
          </li>
          <li>
            <Link to="/card" onClick={()=> setMenu("list")}>Card</Link>
          </li>
          <li>
            <Link to="/about" onClick={()=> setMenu("list")}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
