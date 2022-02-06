import React,{useState} from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import '../style/app.css'


function Game() {
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [cardsArr, addCard] = useState([]);
   
    const handleScore = () => {
      setScore((prevScore) => prevScore + 1);
    }
  
    const handleHighScore = () => {
      setHighScore(prevHighScore=>prevHighScore<score?score:prevHighScore);
    }
  
    const handleCard = (cardName) => {
      addCard((prevArr) => [...prevArr, cardName])
    }
  
    const reset = () => {
      setScore(0)
      addCard([])
    }

    const handleGameLogic = (cardName) => {
      if (!cardsArr.includes(cardName)) {
        handleScore()
        handleCard(cardName)
      }
      else {
        handleHighScore();
        reset();
      }
    }

  return(
  <>
    <Header score={score} highScore={highScore}/>
    <div className='Cardcontainer'>
        <CardContainer  
          handleGameLogic={handleGameLogic}
          cardsArr={cardsArr}
          score={score}
          highScore={highScore}
          
          />
    </div>
  </>)
}

export default Game;
