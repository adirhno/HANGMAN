import React from 'react'

export default function Guesses({remainGuesses}) {
  return (
    <div className='guess'>{remainGuesses} Attempts left</div>
  )
}
