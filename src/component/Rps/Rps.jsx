import React, { useState } from "react";
import "./Rps.css";
import { Link } from "react-router-dom";
import VS from "../../Assests/Rps.png";
import AI from "../../Assests/Computer.png";
import USER from "../../Assests/User.png";

const Rps = () => {
  const [userChoice, setUserChoice] = useState("Paper");
  const [computerChoice, setComputerChoice] = useState("Paper");
  const [result, setResult] = useState(null);

  const choices = ["Rock", "Paper", "Scissors"];

  const handleChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let gameResult;

    if (choice === computerChoice) {
      gameResult = "Tie";
    } else if (
      (choice === "Rock" && computerChoice === "Paper") ||
      (choice === "Paper" && computerChoice === "Scissors") ||
      (choice === "Scissors" && computerChoice === "Rock")
    ) {
      gameResult = "You";
    } else {
      gameResult = "Computer";
    }

    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(gameResult);
  };

  const playAgain = () => {
    console.log("play again");
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="rps">
      <div>
        <h1>
          <i>Rock, Paper, Scissors</i>
        </h1>
      </div>
      <div className="room">
        <div className="computer">
          <p>{computerChoice}</p>
          <img src={AI} alt="" />
          <p>Computer</p>
        </div>
        <div className="vs">
          <img src={VS} alt="" />
        </div>
        <div className="computer">
          <p>{userChoice}</p>
          <img src={USER} alt="" />
          <p>Player</p>
        </div>
      </div>
      <div className="winner">
        <div>WINNER:</div>
        <div>{result}</div>
      </div>
      <div className="choices">
        {userChoice === null ? (
          <div className="choices">
            <button onClick={() => handleChoice("Rock")}>Rock</button>
            <button onClick={() => handleChoice("Paper")}>Paper</button>
            <button onClick={() => handleChoice("Scissors")}>Scissors</button>
          </div>
        ) : (
          <button onClick={() => playAgain()}>Play Again</button>
        )}
      </div>
      <div>
        <button className="btnn-right btnn" id="btnn">
          <Link to="/tictac">Pervious</Link>
        </button>
        <button className="btnn-right btnn" id="btnn">
          <Link to="/card">Next</Link>
        </button>
      </div>
    </div>
  );
};

export default Rps;
