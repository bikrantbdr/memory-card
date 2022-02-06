import React from 'react';
function Card({card,handleGameLogic}) {
    
  return (
      <div className='card' onClick={handleGameLogic.bind(this, card.name)}>
          <img src={card.src} alt={card.name}/>
          <h2>{card.name}</h2>
          <h3 id="aka">{card.aka}</h3>
      </div>
  )
}

export default Card;
