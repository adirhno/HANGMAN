import React from 'react'

export default function Letter({letter,chooseLetter}) {
  return (
    <span className='letter' onClick={()=>chooseLetter(letter)}>{letter}</span>
  )
}
