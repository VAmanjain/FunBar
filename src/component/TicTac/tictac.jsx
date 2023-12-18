import React, { Component } from "react";
import "./tictac.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
class tictac extends Component {
  const;

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  restartGame() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
    });
  }

  renderSquare(i) {
    return (
      <button className="square" onClick={() => this.handleClick(i)}>
        {this.state.squares[i]}
      </button>
    );
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="tictac">
        <div className="game">
          <h1>
            <i>Let's Play ,Tic-Tac-Toe !! </i>&#9996;
          </h1>
          <div className="options">
            <div className="result"></div>
            <div className="status">{status}</div>
            <button
              className="restart-button"
              onClick={() => this.restartGame()}
            >
              Restart
            </button>
          </div>
          <div className="board">
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        </div>
        <button className="btnn-right btnn" id="btnn">
          <Link to="/">Pervious</Link>
        </button>
        <button className="btnn-right btnn" id="btnn">
          <Link to="/card">Next</Link>
        </button>
      </div>
    );
  }
}

export default tictac;
