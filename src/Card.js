import { useState, useEffect } from 'react';

function Card({ card, onclick }) {
  const [className, setClassName] = useState('')

  useEffect(() => {
    if ((!card.flipping && !card.found) && className === 'flipped') {
      setTimeout(() => {
        setClassName('');
      }, 1000);
    }
  }, [card, className])

  return (
    <div className={`flip ${className}`} 
         onClick={() => {
           if(className === '') 
            setClassName('flipped');
            onclick(card.id)
          }
        }>
      <div className="front">
        <h2>Click</h2>
      </div>
      <div className="back">
       <img src={card.src} alt={card.src} />
      </div>
    </div>
  )
}

export default Card;