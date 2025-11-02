import {useState, useEffect} from 'react'
import diceData from '../../../dice'
import Dice from './Dice'

export default function Main() {
    let [sameNum, setsameNum] = useState(null)
        
    const [dice, setdice] = useState(diceData);

    const diceObj = dice.map((die) =>{
           return (<Dice
            key = {die.id}
            id = {die.id}
            number = {die.number}
            isFrozen = {die.isFrozen}
            freezeClick = {freezeClick}
            />)
    })

    useEffect(() => {
    const value = dice[0].number
    const allSame = dice.every(die => die.number === value && die.isFrozen)
    if (allSame && !sameNum) {
        setsameNum(true)
    }
  }, [dice])


    function freezeClick(id){
        if(sameNum == null)
        setdice(prevDice => prevDice.map(item =>{
            return item.id === id ? {...item, isFrozen: !item.isFrozen} : item
            }))

    }

    function rollDice(){
        if(sameNum){
            setdice((prevDice)=>{
            return prevDice.map(prevDice => {
                return prevDice.isFrozen ? { ...prevDice, isFrozen: false, number: Math.floor(Math.random() * 10) } : prevDice
                })})
            setsameNum(false)
            }
        else{
        setdice((prevDice) =>{
            return prevDice.map(prevDice => {
               return prevDice.isFrozen ? prevDice : { ...prevDice, number: Math.floor(Math.random() * 10) }
                })
            })
        }
    }

    console.log("rendered")

    

  return (
    <>
        <header id = "game-header">Tenzies</header>
        <main>
            <p>Roll until dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dices-container'>
                {diceObj}
            </div>
            <button onClick = {rollDice} id = "roll-btn">{sameNum ? "You win!" : "Roll"}</button>
        </main>
    </>
  )
}
