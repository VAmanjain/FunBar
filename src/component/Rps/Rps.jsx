import React, { Component } from 'react';
import './Rps.css';

import {BiRightArrowAlt} from "react-icons/bi";
import {BiLeftArrowAlt} from "react-icons/bi";
import { Link } from "react-router-dom";
class about extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: null,
      computerChoice: null,
      result: '',
    };
  }

  handleUserChoice(choice) {
    const computerChoices = ['Rock ', 'Paper', 'Scissors '];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    const result = this.calculateResult(choice, computerChoice);

    this.setState({
      userChoice: choice,
      computerChoice: computerChoice,
      result: result,
    });
  }

  calculateResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Paper' && computerChoice === 'Rock') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }

  render() {
    return (
      <div className="about">
        <div>

        <h1><i>Rock, Paper, Scissors</i></h1>
        </div>
        <div className="choices">
          <button className='btn-g' onClick={() => this.handleUserChoice('Rock')}>Rock&#x270A;</button>
          <button className='btn-g' onClick={() => this.handleUserChoice('Paper')}>Paper&#x270B;</button>
          <button className='btn-g' onClick={() => this.handleUserChoice('Scissors')}>Scissors&#x270C;</button>
        </div>
        <div className="result">
          {this.state.userChoice && this.state.computerChoice && (
            <p>
              You chose {this.state.userChoice}.<br />
              Computer chose {this.state.computerChoice}.<br />
              {this.state.result}
            </p>
          )}
        </div>
        <div>

        <button className="btnn-right btnn" id="btnn">
          <Link to="/tictac">
            <BiLeftArrowAlt  className="icon"/> 
            Pervious
          </Link>
        </button>
          <button className="btnn-right btnn" id="btnn">
          <Link to="/counter">
            Next
            <BiRightArrowAlt  className="icon"/>
          </Link>
        </button>
        </div>
      </div>
    );
  }
}

export default about;
