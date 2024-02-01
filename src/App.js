/** @format */

import "./App.css";
import Letters from "./component/Letters";
import { useEffect, useState } from "react";
import Characters from "./component/Characters";
import Guesses from "./component/Guesses";
import Hint from "./component/Hint";
import Score from "./component/Score";
import Gameover from "./component/Gameover";
import RestartBtn from "./component/RestartBtn";
import Win from "./component/Win";
let { letters } = require("./config");

function App() {
	console.log(letters);
	letters = letters.map((l) => l.toUpperCase());
	const [score, setScore] = useState(100);
	const [gameOver, setGameOver] = useState(false);
	const [hint, setHint] = useState(' "the one and the only who developed this game"');
	const [secretWord, setSecretWord] = useState(["A", "D", "I", "R"]);
  const [revealWord, setRevealWord] = useState([]);
	const [lettersLeft, setLetterLeft] = useState(secretWord.length);
	const [GuessedWord, setGuessedWord] = useState(["_","_","_","_"]);
	const [remainGuesses, setRemainGuess] = useState(5);
	const [letterz, setLetters] = useState(letters);

  useEffect(()=>setRevealWord(secretWord),[])

	const checkIfLetterExists = (letter) => {
		return secretWord.filter((l) => {
			return l == letter;
		});
	};

	const chooseLetter = (letter) => {
		if (checkIfLetterExists(letter).length != 0) {
			setScore((pre) => pre + 5);
			setLetterLeft((pre) => pre - 1);
			let letterIndex = secretWord.findIndex((l) => l === letter);
			let updatedWord = [...GuessedWord];
			updatedWord[letterIndex] = letter;
			setGuessedWord(updatedWord);
			let newWord = [...secretWord];
			newWord[letterIndex] = "*";
			setSecretWord(newWord);
		} else {
			let newLetters = [...letterz];
			newLetters = letterz.filter((l) => {
				return l != letter;
			});
			setLetters(newLetters);
			setScore((pre) => pre - 20);
			setRemainGuess((pre) => pre - 1);
		}
	};

  const restartGame=()=>{
   window.location.reload();
  }

	return (
		<div className="App">
			<Score score={score} />
			{lettersLeft == 0 ? (
				<>
					{" "}
					<Win /> <Characters word={GuessedWord} /><RestartBtn restartGame={restartGame}/>
				</>
			) : remainGuesses == 0 ? (
				<Gameover word={revealWord} restartGame={restartGame}/>
			) : (
				<>
					<Guesses remainGuesses={remainGuesses} />
					<Characters word={GuessedWord} />
					<Hint hint={hint} />
				</>
			)}
			{remainGuesses != 0 && lettersLeft !=0 ?<Letters chooseLetter={chooseLetter} letters={letterz} />:<></>}
      {gameOver ? <RestartBtn /> : <></>}
		</div>
	);
}

export default App;
