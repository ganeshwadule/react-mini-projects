import React, { useEffect, useState } from "react";
import "./style.css";
// 3 * 3 matrix
// state shoecasing whose turn
// function continiously chacking for win
const TicTacToe = () => {
  const [matrix,setMatrix] = useState([
    ["","",""],
    ["","",""],
    ["","",""]
  ])
  const [turn, setTurn] = useState("X");
  

  const grid = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => 0)
  );

  const handleClick = (rowIndex,colIndex)=>{
    setMatrix((prevMatrix)=>(
        prevMatrix.map((row,rIndex)=>(
            row.map((col,cIndex)=>(
                rIndex === rowIndex && cIndex === colIndex ? turn : col
            ))

        ))
    ))

    setTurn(turn === "X" ? "O" : "X");
  }

  const checkWinner = ()=>{
    for(let i=0; i<matrix.length; i++){
            if(matrix[i][0] === "X" && matrix[i][1] === "X" && matrix[i][2] === "X"){
            }
            if(matrix[i][0] === "O" && matrix[i][1] === "O" && matrix[i][2] === "O"){

            }

    }

    
  }

  const reset = ()=>{
    setMatrix((prevMatrix)=>(
        prevMatrix.map((row,rIndex)=>(
            row.map((col,cIndex)=>(
                col = ""
            ))
        ))
    ));
  }
  useEffect(()=>{
    checkWinner();
  },[turn])
  return (
    <div className="main">
      <div className="header">{turn}'s Turn</div>
      {
        matrix.map((row,rowIndex)=>(
            <div className="row" key={rowIndex}>
                {
                    row.map((box,colIndex)=>(
                        <div className="box" key={colIndex} onClick={()=>handleClick(rowIndex,colIndex)}>
                            {box}
                        </div>
                    ))
                }
            </div>
        ))
      }
      <button onClick={()=>reset()}>Restart</button>
    </div>
  );
};

export default TicTacToe;
