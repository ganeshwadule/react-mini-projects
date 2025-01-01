import React, { useState } from 'react'
import data from "./data";
import "./accordion.css";
const Accordion = () => {
    const [selected,setSelected] = useState(null);  
    const [enableMultiSelection,setEnableMultiSelection] = useState(false); //
    const [multiple,setMultiple] = useState([]);



    const handleSingleClick = (currId) =>{
        setSelected(selected === currId ? null : currId);
    }

    const handleMultiSelection = (currId)=>{
        const arr = [...multiple]
        if(arr.indexOf(currId) === -1){arr.push(currId)}
        else{
            arr.splice(arr.indexOf(currId), 1);
        }
        setMultiple(arr);
    }
    console.log(data)
  return (
    <div classname = "Wrapper">
        <button className='btn' onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>enableMultiSelection</button>
      {
        data.map((item)=>(
            <div key={item.id} className="element" onClick={()=>
            enableMultiSelection ?
            handleMultiSelection(item.id):
            handleSingleClick(item.id)}>
                {item.question}
                {
                    enableMultiSelection && multiple.indexOf(item.id) !== -1 ?
                    <div className="answer">{item.answer}</div> :
                    selected === item.id && 
                    <div className="answer">{item.answer}</div>

                }
            </div>
            
        ))
      }
    </div>
  )
}

export default Accordion;
