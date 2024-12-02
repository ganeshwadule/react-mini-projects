import "./style.css"
import { useState } from "react";
const TikTakToe = () => {
const [turn,setTurn] = useState("x");
  const array = [[1,2,3],[4,5,6],[7,8,9]];
  const handleClick = (rowIndex,colIndex)=>{
    
  }
  return (
    <div className="wrapper">
        <div className="header"><h1>{`Now is ${turn}'s turn`}</h1></div>
        <div className="main">
        {
            array.map((row,rowIndex) =>(
                <div className="row">
                    {
                        row.map((col,colIndex) =>(
                            <div 
                            onClick={()=>handleClick(rowIndex,colIndex)}
                            className="box">
                                {
                                    turn === "x"?"x":"o"
                                }
                            </div>
                        ))
                    }
                </div>
            ))
        }
        </div>
        
    </div>
  );
};

export default TikTakToe;
