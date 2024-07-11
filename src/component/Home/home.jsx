import './home.css'
import { Link } from "react-router-dom";
function Home() {

    
  return (
    <>
      <div className="container">
     
          <h1 className="head">FUNBAR</h1>
          <p className="par">A small game website</p>
          <span> You can you see my short games on there &#9995;</span>
   
      
        <button className="btnn" id="btnn">
          <Link to="/tictac">
            Let's Starts
          </Link>
        </button>
      </div>
      
    </>
  );
}
export default Home;
