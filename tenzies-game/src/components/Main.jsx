import {useState, useEffect} from 'react'
import Dice from './Dice'

export default function Main() {
    const dices = []

    for (let i = 0; i < 10; i++){
        dices.push({
            id: i + 1,
            number: Math.floor(Math.random() * 11),
            isFrozen: false
        })
    }

    const diceObj = dices.map((die) =>{
         return (
           <Dice
            key = {die.id}
            id = {die.id}
            number = {die.number}
            isFrozen = {die.isFrozen}
            />
        )
    })

    const [dice, setdice] = useState(diceObj);

    console.log(dice)

  return (
    <>
        <header id = "game-header">Tenzies</header>
        <main>
            <p>Roll until dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dices-container'>
                {dice}
            </div>
            <button id = "roll-btn">Roll</button>
        </main>
    </>
  )
}
