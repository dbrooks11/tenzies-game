import React from 'react'

export default function Dice(props) {
  return (
      <button key = {props.id} id = "dice-btn">{props.number}</button>
  )
}

