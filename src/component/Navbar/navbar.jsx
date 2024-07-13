// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./navbar.css";

// import { GiHamburgerMenu } from "react-icons/gi";
// import { RiCloseLine } from "react-icons/ri"; // Changed RxCross2 to RiCloseLine assuming it's the correct icon

// function NavBar() {
//   const [menu, setMenu] = useState("list");

//   return (
//     <div className="nav">
//       <div className="nav-bar">
//         <div className="icon">
//           <span>FunBar</span>
//         </div>
//         <div children="menu-icon">
//           <GiHamburgerMenu
//             onClick={() => setMenu("list showList")}
//             className="openMenu"
//           />
//         </div>
//       </div>
//       <div className={menu}>
//         <RiCloseLine onClick={() => setMenu("list")} className="closeMenu" />
//         <ul>
//           <li>
//             <Link to="/" onClick={()=> setMenu("list")}>Home</Link>
//           </li>
//           <li>
//             <Link to="/tictac" onClick={()=> setMenu("list")}>Tic Tac</Link>
//           </li>
//           <li>
//             <Link to="/rps" onClick={()=> setMenu("list")}>Rps</Link>
//           </li>
//           <li>
//             <Link to="/card" onClick={()=> setMenu("list")}>Card</Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={()=> setMenu("list")}>About</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default NavBar;


import { useState } from 'react'
import  styles from './Navbar.module.css';
import { Link } from 'react-router-dom';  
import Headroom from 'react-headroom';



function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
    <>
    <Headroom className='headr'
    style={{
      webkitTransition: 'all .5s ease',
      mozTransition: 'all .5s ease',
      oTransition: 'all .5s ease',
      transition: 'all .5s ease'
    }}
    >
      <header className="App-header">


        <nav className={`${styles.navbar}`}>
          <Link to="/" className={`${styles.logo}`}>FunBar</Link>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/ticTac" className={`${styles.navLink}`}>Tic Tac Toe</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/rps" className={`${styles.navLink}`}>Rock Paper Scissor</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/card" className={`${styles.navLink}`}>Puzzle</Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>About</Link>
            </li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


      </header>
      </Headroom>
      </>
  );
}


export default Navbar;

;