import React, { Component } from 'react';
import './card.css';
import {BiRightArrowAlt} from "react-icons/bi";
import {BiLeftArrowAlt} from "react-icons/bi";
import { Link } from "react-router-dom";
class card extends Component {
  constructor() {
    super();
    this.state = {
      cards: this.shuffleCards(this.generateCards()),
      flippedIndices: [],
      matchedPairs: [],
    };
  }

  generateCards() {
    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cards = [];
    for (let i = 0; i < cardValues.length; i++) {
      cards.push({ id: i * 2, value: cardValues[i] });
      cards.push({ id: i * 2 + 1, value: cardValues[i] });
    }
    return cards;
  }

  shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  handleCardClick(index) {
    const { flippedIndices, matchedPairs, cards } = this.state;

    if (flippedIndices.length === 2) {
      // Two cards are already flipped; don't allow additional flips
      return;
    }

    if (flippedIndices.length === 1 && flippedIndices[0] === index) {
      // The same card was clicked twice; ignore
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];

    if (newFlippedIndices.length === 2) {
      // Two cards are flipped; check if they match
      const card1 = cards[newFlippedIndices[0]];
      const card2 = cards[newFlippedIndices[1]];

      if (card1.value === card2.value) {
        // Cards match; add them to the matched pairs
        this.setState({
          matchedPairs: [...matchedPairs, card1.value],
          flippedIndices: [],
        });
      } else {
        // Cards don't match; flip them back after a short delay
        setTimeout(() => {
          this.setState({ flippedIndices: [] });
        }, 1000);
      }
    } else {
      this.setState({ flippedIndices: newFlippedIndices });
    }
  }

  renderCard(card, index) {
    const { flippedIndices, matchedPairs } = this.state;
    const isFlipped = flippedIndices.includes(index) || matchedPairs.includes(card.value);

    return (
      <div
        key={index}
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => this.handleCardClick(index)}
      >
        {isFlipped ? card.value : '?'}
      </div>
    );
  }

  render() {
    const { cards, matchedPairs } = this.state;
    const gameWon = matchedPairs.length === cards.length / 2;

    return (
      <div className="book">
        <div>

        <h1>Let's Check your Memory !!</h1>
        <div className="card-container">
          {cards.map((card, index) => this.renderCard(card, index))}
        </div>
        {gameWon && <p>Congratulations! You've won the game!</p>}
        <button className="btnn-right btnn" id="btnn">
          <Link to="/tictac">
            <BiLeftArrowAlt  className="icon"/> 
            Pervious
          </Link>
        </button>
          <button className="btnn-right btnn" id="btnn">
          <Link to="/about">
            Next
            <BiRightArrowAlt  className="icon"/>
          </Link>
        </button>
        </div>
      </div>
      
    );
  }
}

export default card;
