import { useState } from 'react'
import './App.css'
import Header from './header'

function App() {
  const [diceValue, setDiceValue] = useState(0)

    function rollDice6(e) {
    e.preventDefault(); // prevent form refresh
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomNumber); // update state
  }

  return (
    <>
    <div className="herosection">
      <div className="navBar">
        <Header />
      </div>
      <div className="card">
        <div className="heroIntro">Hello, my name is</div>
        <div className="heroName">Zak Bernstein</div>
      </div>
      <form>
        <label id="diceVal">
            {diceValue !== null ? `You rolled: ${diceValue} ` : "Roll the 6 sided dice!"}
          </label>
          <button onClick={rollDice6}>Roll Dice</button>
      </form>
    </div>
    </>
  )
}

export default App
