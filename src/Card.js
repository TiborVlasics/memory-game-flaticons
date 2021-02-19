import React, { useState } from 'react';

function Card(props) {
  const [className, setClassName] = useState('')

  return (
    <div className={`flip ${className}`} 
         onClick={() => className === '' ? setClassName('flipped') : setClassName('')}
          >
      <div className="front">
        <h2>Choose 2 cards</h2>
      </div>
      <div className="back">
       <img src={props.card.src} alt={props.card.src} />
      </div>
    </div>
  )
}

export default Card;