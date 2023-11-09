import React, { useState } from 'react'
import Square from "./Square";

function Board() {
    const [xIsNext, setxIsNext] = useState(true);
    const [square , setSquare] = useState(Array(9).fill(null));

    const winner = calculateWinner(square);
    let status;

    if(winner){
        status = "Winner : "+ winner;
    }
    else{
        status = "Player : "+ (xIsNext?'x':'o');
    }

    function calculateWinner(square){
        const lines = [ [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6] ];

        for(let i=0; i<lines.length; i++){
            const [a,b,c] = lines[i];
            if(square[a] && square[a]===square[b] && square[a]===square[c])
            return square[a];
        }
        return null;
    }

    function handleClick(i){
        const nextSquare = square.slice();
        if(square[i] || calculateWinner(square)) return;
        if(xIsNext){
        nextSquare[i]='x';
        }
        else{
        nextSquare[i]='o'
        }
        setxIsNext(!xIsNext);
        setSquare(nextSquare);
        
    }

return (
    <>
    <h1>Tic Tac Toe</h1>
    <div>
    <Square value={square[0]} onSquareClick={()=>{handleClick(0)}}/>
    <Square value={square[1]} onSquareClick={()=>{handleClick(1)}}/> 
    <Square value={square[2]} onSquareClick={()=>{handleClick(2)}}/>
    </div>
    <div>
    <Square value={square[3]} onSquareClick={()=>{handleClick(3)}}/> 
    <Square value={square[4]} onSquareClick={()=>{handleClick(4)}}/> 
    <Square value={square[5]} onSquareClick={()=>{handleClick(5)}}/>
    </div>
    <div>
    <Square value={square[6]} onSquareClick={()=>{handleClick(6)}}/> 
    <Square value={square[7]} onSquareClick={()=>{handleClick(7)}}/> 
    <Square value={square[8]} onSquareClick={()=>{handleClick(8)}}/>
    </div>
    <div>
        <h1>{status}</h1>
    </div>
    </>
    )
}

export default Board;