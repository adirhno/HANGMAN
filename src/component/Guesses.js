import React from 'react'

export default function Guesses({remainGuesses}) {
  return (
    <div className='guess'>You have {remainGuesses} guesses left</div>
  )
}
