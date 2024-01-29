import React from 'react'
import Lines from './Lines'

export default function Characters({word, lines}) {
  return (
    <div>
      {word.map((char,index)=> <span className='characters' key={index}>{char}</span>)}
      <Lines lines={lines} />
    </div>
  )
}
