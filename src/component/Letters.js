import React from 'react'
import Letter from './Letter'

export default function ({letters,chooseLetter}) {
  return (
    <div className='letters'>{letters.map((letter,index)=>{return <Letter key={index} chooseLetter={chooseLetter} letter={letter} />})}</div>
  )
}
