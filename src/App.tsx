import React from "react";
import './style.css';

interface ButtonClick {
  value: string;
  fun : () => any;
}


const SquareButton: React.FC<ButtonClick> = ({ value ,fun}) =>{
  return <button className="square" onClick={fun} >{value}</button>;
};

const clickHandler = () => {
  console.log('clicked');
}

export default function Board() {
  
  return (
    <>
      <div className="row">
        <SquareButton value="X" fun={clickHandler} />
        <SquareButton value="X" fun={clickHandler}/>
        <SquareButton value="O" fun={clickHandler}/>
      </div>
      <div className="row">
        <SquareButton value="X" fun={clickHandler}/>
        <SquareButton value="O" fun={clickHandler}/>
        <SquareButton value="O" fun={clickHandler}/>
      </div>
      <div className="row">
        <SquareButton value="X" fun={clickHandler}/>
        <SquareButton value="X" fun={clickHandler}/>
        <SquareButton value="O" fun={clickHandler}/>
      </div>
    </>
  );
}