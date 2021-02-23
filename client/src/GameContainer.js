import moray from './assets/moray.svg'
import cathedral from './assets/cathedral-of-lima.svg'
import charango from './assets/charango.svg'
import guava from './assets/guava.svg'
import lucuma from './assets/lucuma.svg'
import penguin from './assets/penguin.svg'
import rupicola from './assets/rupicola.svg'
import Card from './Card'
import './App.css';
import React, { useState, useEffect } from 'react';


/**
 * 
 * @param {*} array 
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const initialState = [
  { id: 1, src: moray, found: false },
  { id: 2, src: moray, found: false },
  { id: 3, src: cathedral, found: false },
  { id: 4, src: cathedral, found: false },
  { id: 5, src: charango, found: false },
  { id: 6, src: charango, found: false },
  { id: 7, src: guava, found: false },
  { id: 8, src: guava, found: false },
  { id: 9, src: lucuma, found: false },
  { id: 10, src: lucuma, found: false },
  { id: 11, src: penguin, found: false },
  { id: 12, src: penguin, found: false },
  { id: 13, src: rupicola, found: false },
  { id: 14, src: rupicola, found: false },
];

function GameContainer(props) {
  const [cards, setCards]  = useState(shuffle(initialState.slice(0, props.boardSize)));

  const setFlipping = (cardId) => {
    const newCards = cards.map(card => card.id === cardId ? { ...card, flipping: true } : card )
    setCards(newCards);
  }

  useEffect(() => {
    const flippedCards = cards.filter(card => card.flipping); 
    const twoFlipped = flippedCards.length === 2; 
    if (twoFlipped) {
      const found = flippedCards[0].src === flippedCards[1].src;
      const newCards = cards.map(card => card.flipping 
        ? { id: card.id, src: card.src, found } 
        : card);
      setCards(newCards);
    }
    const gameWon = !cards.some(card => card.found === false);
    if(gameWon) {
    }
  }, [cards]);

  return (
    <div className="App">
      <div className="cards-wrapper">
        <div className="card-container">
          {
            cards.map((card, index) => {
              return <Card card={card} onclick={setFlipping} key={index} />;
            })
          }
        </div>
      </div>
      <div className="footer">
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"   title="Flaticon">www.flaticon.com</a></div> 
      </div>
    </div>
  );
}

export default GameContainer;
