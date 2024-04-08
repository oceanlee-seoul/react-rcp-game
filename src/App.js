import "./App.css";
import { useState } from "react";
import resetBtnImg from "./assets/ic-reset.svg";
import { compareHand, generateRandomHand } from "./utils.js";
import HandIcon from "./components/HandIcon.jsx";
import HandButton from "./components/HandButton.jsx";

const INITIAL_VALUE = "rock";

const getResult = (me, enemy) => {
  const result = compareHand(me, enemy);
  if (result > 0) return "승리";
  if (result < 0) return "패배";
  return "무승부";
};

const App = () => {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [enemyHand, setEnemyHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [enemyScore, setEnemyScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextEnemyHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextEnemyHand);
    const comparison = compareHand(nextHand, nextEnemyHand);
    setHand(nextHand);
    setEnemyHand(nextEnemyHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setEnemyScore(enemyScore + bet);
  };

  const handleBetChange = ({ target }) => {
    let num = Number(target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setEnemyHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setEnemyScore(0);
    setBet(1);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <button onClick={handleClearClick}>
        <img className="App-reset" src={resetBtnImg} alt="초기화 버튼" />
      </button>
      <div>
        {score} : {enemyScore}
      </div>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={enemyHand} />
      </div>
      <div>
        <input
          type="number"
          value={bet}
          min={1}
          max={9}
          onChange={handleBetChange}
        />
      </div>
      <p>승부 기록 : {gameHistory.join(", ")}</p>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;
