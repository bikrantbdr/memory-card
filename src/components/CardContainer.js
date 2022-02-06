import React, {useState, useEffect} from 'react';
import Data from './Datalist'
import Card from './Card'


function CardContainer({handleGameLogic, score, highScore }) {

    const [cardDatas,setNewCards] = useState(Data);
    const shuffle = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
          let randomIdx = Math.floor(Math.random() * i);
          [cards[randomIdx], cards[i]] = [cards[i], cards[randomIdx]];
        }
      }

      useEffect(() => {
        const newCards = [...cardDatas];
        shuffle(newCards);
        setNewCards(newCards);
      }, [score, highScore]);


        return <div className="cardContainer">{
            cardDatas.map((card) => (
            <Card card={card} key={card.name} handleGameLogic={handleGameLogic} />
        ))}
  </div>;
}

export default CardContainer;
