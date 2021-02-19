import moray from './assets/moray.svg'
import cathedral from './assets/cathedral-of-lima.svg'
import charango from './assets/charango.svg'
import guava from './assets/guava.svg'
import lucuma from './assets/lucuma.svg'
import penguin from './assets/penguin.svg'
import rupicola from './assets/rupicola.svg'
import Card from './Card'
import './App.css';
import React, { useState } from 'react';

/**
 * 
 * @param {*} array 
 // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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
  { id: 1, src: moray },
  { id: 2, src: moray },
  { id: 3, src: cathedral },
  { id: 4, src: cathedral },
  { id: 5, src: charango },
  { id: 6, src: charango },
  { id: 7, src: guava },
  { id: 8, src: guava },
  { id: 9, src: lucuma },
  { id: 10, src: lucuma },
  { id: 11, src: penguin },
  { id: 12, src: penguin },
  { id: 13, src: rupicola },
  { id: 14, src: rupicola },
];

function App() {
  const [cards, setCards]  = useState(shuffle(initialState));

  return (
    <div className="App">
      <div className="cards-wrapper">
        <div className="card-container">
          {
            cards.map((card, index) => {
              return <Card card={card} key={index} />;
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

export default App;
