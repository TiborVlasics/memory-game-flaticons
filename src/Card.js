function Card(props) {
  return (
    <div className="flip">
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