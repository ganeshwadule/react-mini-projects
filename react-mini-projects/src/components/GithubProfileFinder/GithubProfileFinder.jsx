import React, { useEffect, useState } from 'react'
import "./style.css"
import GithubProfileCard from './GithubProfileCard';
const GithubProfileFinder = () => {
    const [input,setInput] = useState();
    const [data,setData] = useState(null);
    const [isCardOpen,setCardOpen] = useState(false);
    const fetchData = async (inputData)=>{
        try {
            const response = await fetch(`https://api.github.com/users/${inputData}`);
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (inputData)=>{
        fetchData(inputData);
        setCardOpen(true);
    }
    // useEffect(()=>{

    // },[])han
  return (
    <div className="wrapper">
        <div className='form-container'>
        <input type="text" onClick={(e)=>setInput(e.target.value)} />
        <button onClick={()=>handleSubmit(input)}>Submit</button>
        </div>

        <div className="card-container">
        { isCardOpen && <GithubProfileCard data={data} isCardOpen={isCardOpen} setCardOpen={setCardOpen}/>}
        </div>
        
        {/* {data?.login} */}
    </div>
  )
}

export default GithubProfileFinder
