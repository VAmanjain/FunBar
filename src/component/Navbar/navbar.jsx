import {Link} from "react-router-dom";
import "./navbar.css";
function NavBar (){

   
    return(
        <>
        <div className="nav" >

        <h1 >
            Fun-Bar
        </h1>
        <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/tictac">Tic-Tac</Link></li>
  <li><Link to="/card">Cards</Link></li>
  <li><Link to="/about">Rps</Link></li>
  <li><Link to="/counter">About</Link></li>



</ul>
        </div>
    </>
    )
}

export default NavBar;