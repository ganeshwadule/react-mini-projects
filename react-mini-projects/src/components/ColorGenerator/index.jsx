import React, { useState } from "react";
import "./style.css";
const ColorGenerator = ()=>{
    const [typeOfColor,setTypeOfColor] = useState("hex");
    const [color,setColor] = useState("#ffffff");
    const helper = (length)=>{
        return Math.floor(Math.random()*length);
    }

    const generateHexColor = ()=>{
        setTypeOfColor("hex");
        let HexColor = "#";

        const arr = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];

        for(let i=0; i<6; i++){
            let index = helper(16);
            HexColor += arr[index];
        }

        setColor(HexColor);
    }

    const generateRGBColor = ()=>{
        setTypeOfColor("rgb");
        let r = helper(255);
        let g = helper(255);
        let b = helper(255);

        let rgbColor = `rgb(${r},${g},${b})`;

        setColor(rgbColor);
    }

    // const generateColor = ()=>{

    // }
    // const []gb
    return(
        <div className="ColorGenerator"
            style={{
                backgroundColor:color
            }}
        >
            <div className="Buttons">
            <button 
            className="btn"
            onClick={()=>generateHexColor()}>HexGenerator</button>

            <button 
                className="btn"
            onClick={()=>generateRGBColor()}>RGBGenerator</button>
            </div>
            <div className="info">
                <h3>
                    {typeOfColor.toUpperCase()}

                </h3>
                <h2>{color}</h2>
            </div>

        </div>
    )
}
export default ColorGenerator;