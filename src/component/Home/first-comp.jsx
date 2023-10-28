import './home.css'
import { Link } from "react-router-dom";
import {BiRightArrowAlt} from "react-icons/bi";
function FirstComp() {

    
  return (
    <>
      <div className="container">
     
          <h1 className="head">Hello,everyone!! &#128515;</h1>
          <p className="par">This is a fun website </p>
          <span> You can you see my short games on there &#9995;</span>
   
      
        <button className="btnn" id="btnn">
          <Link to="/tictac">
            Let's Starts
            <BiRightArrowAlt  className="icon"/>
          </Link>
        </button>
      </div>
      
    </>
  );
}
export default FirstComp;
