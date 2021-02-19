import moray from './assets/moray.svg'
import cathedral from './assets/cathedral-of-lima.svg'
import charango from './assets/charango.svg'
import guava from './assets/guava.svg'
import lucuma from './assets/lucuma.svg'
import penguin from './assets/penguin.svg'
import rupicola from './assets/rupicola.svg'
import Card from './Card'
import './App.css';

function duplicate(array) {
  return array.concat(array);
}

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

function App() {
  const cards = [
    { src: moray },
    { src: cathedral },
    { src: charango },
    { src: guava },
    { src: lucuma },
    { src: penguin },
    { src: rupicola },
  ];

  return (
    <div className="App">
      <div className="cards-wrapper">
        <div className="card-container">
          {
            shuffle(duplicate(cards)).map((card, index) => {
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
