import { useState } from 'react';

import './App.css'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkToWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import {saveLocalStorage,resetLocalStorage} from './logic/storage/index.js'
import {Board} from './components/Board.jsx'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    try {
      return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
    } catch (e) {
      console.error('Error parsing board from localStorage', e);
      return Array(9).fill(null);
    }
  });


  const [turn, setTurn] = useState(() =>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });


  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return null

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveLocalStorage ({
      'board' : newBoard,
      'turn' : newTurn
    })
    

    const newWinner = checkToWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetLocalStorage()
  }


  return (
    <section className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame} >Reiniciar partida</button>

      <div className="game">
        <Board board={board} updateBoard={updateBoard} />
      </div>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />

    </section>
  );
}

export default App;
