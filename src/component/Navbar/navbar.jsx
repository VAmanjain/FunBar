import { Link } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="icon">
          <span>FunBar</span>
        </div>
        <div className="list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tictac">Tic Tac</Link>
            </li>
            <li>
              <Link to="/rps">Rps</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
