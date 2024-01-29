/** @format */

import logo from "./logo.svg";
import "./App.css";
import Letters from "./component/Letters";
import { useState } from "react";
import Characters from "./component/Characters";
import Guesses from "./component/Guesses";
import Hint from "./component/Hint";
import Score from "./component/Score";
import Gameover from "./component/Gameover";
import RestartBtn from "./component/RestartBtn";

function App() {
  const [score,setScore]=useState(100)
  const [gameOver,setGameOver]=useState(false)
  const [hint,setHint]=useState("The one and the only who develop the game..")
  const [word, setWord] = useState(["A", "D", "I", "R","A"]);
  const [GuessedWord, setGuessedWord] = useState([]);
  const [remainGuesses, setRemainGuess] = useState(5);
  const[lines,setLines]=useState(word.length-GuessedWord.length)
  const checkIfLetterCorrect = (letter) => {
    console.log(
      word.filter((l) => {
        return l == letter;
      })
    );
    return word.filter((l) => {
      return l == letter;
    });
  };
  const chooseLetter = (letter) => {
    if (checkIfLetterCorrect(letter).length != 0) {
      setScore((pre)=> pre+5)
      let updatedWord = [...GuessedWord];
      updatedWord.push(letter);
      setGuessedWord(updatedWord);
    } else {
      setScore((pre)=> pre-20)
      setRemainGuess((pre) => pre - 1);
    }
  };
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  letters = letters.map((l) => l.toUpperCase());

  return (
    <div className="App">
      <Score score={score}/>
      {remainGuesses==0? <Gameover />: <><Guesses remainGuesses={remainGuesses} />
      <Characters word={GuessedWord} lines={word.length - GuessedWord.length} />
      <Hint hint={hint} /></>}
      <Letters chooseLetter={chooseLetter} letters={letters} />
    {gameOver? <RestartBtn />:<></>}
    </div>
  );
}

export default App;
