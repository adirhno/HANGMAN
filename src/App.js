/** @format */

import "./App.css";
import Letters from "./component/Letters";
import { useState } from "react";
import Characters from "./component/Characters";
import Guesses from "./component/Guesses";
import Hint from "./component/Hint";
import Score from "./component/Score";
import Gameover from "./component/Gameover";
import RestartBtn from "./component/RestartBtn";
import Win from "./component/Win";
let {letters}= require('./config')

function App() {
  console.log(letters)
  letters = letters.map((l) => l.toUpperCase());
  const [score, setScore] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [hint, setHint] = useState(' "who is seroja"');
  const secretWord=["S", "E", "R", "G","E","Y"]
  const [lettersLeft,setLetterLeft]=useState(secretWord.length)
  const [GuessedWord, setGuessedWord] = useState(["_","_","_","_","_","_"]);
  const [remainGuesses, setRemainGuess] = useState(5);
  const [letterz, setLetters] = useState(letters);
 
  const checkIfLetterCorrect = (letter) => {
    return secretWord.filter((l) => {
      return l == letter;
    });
  };

  const chooseLetter = (letter) => {
    if (checkIfLetterCorrect(letter).length != 0) {
      setScore((pre) => pre + 5);
      setLetterLeft((pre)=>pre-1)
      let letterIndex = secretWord.findIndex((l) => l === letter);
      
      let updatedWord = [...GuessedWord];
      updatedWord[letterIndex]=letter
      
      setGuessedWord(updatedWord);

    } else {
      let newLetters = [...letterz];
      newLetters = letterz.filter((l) => {return l != letter;});
      setLetters(newLetters);
      setScore((pre) => pre - 20);
      setRemainGuess((pre) => pre - 1);
    }
  };

  return (
    <div className="App">
      <Score score={score} />
      {lettersLeft==0? <> <Win /> <Characters word={GuessedWord} /></>  :remainGuesses == 0 ? ( <Gameover />) : (<>
          <Guesses remainGuesses={remainGuesses} />
          <Characters word={GuessedWord} />
          <Hint hint={hint} />
           </> )}
      <Letters chooseLetter={chooseLetter} letters={letterz} />
      {gameOver ? <RestartBtn /> : <></>}
    </div>
  );
}

export default App;
