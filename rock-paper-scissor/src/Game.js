import React, { useState } from "react";
import "./App.css";

const options = ["Rock", "Paper", "Scissors"];

const Game = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleUserChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(getResult(choice, computerChoice));
  };

  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  };

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      <div className="game-card">
        <div className="game-content">
          <div className="choices">
            <h2>Your choice: {userChoice}</h2>
            <h2>Computer's choice: {computerChoice}</h2>
          </div>
          <div className="result">
            <h2>{result}</h2>
          </div>
        </div>
        <div className="options">
          {options.map((option) => (
            <button key={option} onClick={() => handleUserChoice(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
