import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1>FunBar</h1>
        <h3>
          FunBar is a website featuring a variety of small games designed to
          provide a refreshing break from coding challenges, helping to lift the
          user's mood and mindset. The website offers a diverse selection of
          games for users to enjoy.
        </h3>

        
          <Link to="/tictac" className="button" id="btnn" >
          <span>

            Let's Play
          </span>
          <EastIcon className="arrow_icon"/>
          </Link>
        
      </div>
    </>
  );
};

export default Hero;
