import React from 'react'

export default function Characters({word}) {
  return (
    <div>
      {word.map((char,index)=> <span className='characters' key={index}>{char}</span>)}
    </div>
  )
}
