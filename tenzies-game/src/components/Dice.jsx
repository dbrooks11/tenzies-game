import React from 'react'

export default function Dice(props) {
  return (
      <button 
      key = {props.id} 
      onClick = {() => props.freezeClick(props.id)} 
      className = {props.isFrozen ? "dice-btn-frozen" : "dice-btn-unfrozen"}>
        {props.number}
      </button>
  )
}

