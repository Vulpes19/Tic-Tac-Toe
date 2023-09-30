import React from "react";
import './style.css';
import { useState } from "react";

interface ButtonClick {
  value: string;
  onSquareClick: () => void;
}

interface Restart {
  onRestart: () => void;
}

const SquareButton: React.FC<ButtonClick> = ({value, onSquareClick}) => {
  return <button className="square" onClick={onSquareClick} >{value}</button>;
};

const RestartButton: React.FC<Restart> = ({onRestart}) => {
  return <button className="restart" onClick={onRestart}>Restart</button>
}

function FindWinner(squares: string[]): string {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for ( let i = 0; i < lines.length; i++ ) {
    const [square1, square2 , square3] = lines[i];
    if ( squares[square1] == squares[square2] && squares[square1] == squares[square3] && squares[square2] == squares[square3])
      return (squares[square1]);
  }
  return "";
}

export default function Board() {
  const [isXnext, setXnext] = useState<boolean>(true);
  const [squares, setSquare] = useState<string[]>(Array(9).fill(""));
  const clickHandler = (i: number) => {
    if (squares[i] != "" || FindWinner(squares))
      return ;
    const copy = squares.slice();
    if (isXnext)
        copy[i] = 'X';
    else
        copy[i] = 'O';
    setSquare(copy);
    setXnext(!isXnext);
  }
  const handleRestart = () => {
    const copy = squares.slice();
    copy.fill("");
    setSquare(copy);
  }  
  const winner:string = FindWinner(squares);
  let status;
  if (winner != "")
    status = "Winner is " + winner;
  else
    status = "The player is " + (isXnext ? 'X' : 'O');
  return (
    <>
      <div className="status">{status}</div>
      <div className="row">
        <SquareButton value={squares[0]} onSquareClick={() => clickHandler(0)}/>
        <SquareButton value={squares[1]} onSquareClick={() => clickHandler(1)}/>
        <SquareButton value={squares[2]} onSquareClick={() => clickHandler(2)}/>
      </div>
      <div className="row">
        <SquareButton value={squares[3]} onSquareClick={() => clickHandler(3)}/>
        <SquareButton value={squares[4]} onSquareClick={() => clickHandler(4)}/>
        <SquareButton value={squares[5]} onSquareClick={() => clickHandler(5)}/>
      </div>
      <div className="row">
        <SquareButton value={squares[6]} onSquareClick={() => clickHandler(6)}/>
        <SquareButton value={squares[7]} onSquareClick={() => clickHandler(7)}/>
        <SquareButton value={squares[8]} onSquareClick={() => clickHandler(8)}/>
      </div>
      <div className="restart button">
        <RestartButton onRestart={handleRestart}></RestartButton>
      </div>
    </>
  );
}