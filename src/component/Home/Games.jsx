import React from "react";
import "./home.css";
import "./GamesCards";
import  {GamesCards}  from "./GamesCards";
import { Link } from "react-router-dom";

  const Games = () => {
    console.log(GamesCards);
    return (
      <>
        <div className="games">
          <div className="heading ">
            <h1>Games</h1>
            <p>We offers following games..</p>
          </div>
  
          <div className="game_cards">
            {GamesCards.map(( card) => (
              <div className="game_card" key={card.id} >
                <Link to={`/${card.link}`} className="link" >
                <img src={card.image} alt={card.names} />
                <h3>{card.names}</h3>
                </Link>
                {/* <p>{card.image}</p> */}
                
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };


export default Games;
