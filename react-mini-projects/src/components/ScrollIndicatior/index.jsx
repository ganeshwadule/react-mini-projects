import React, { useEffect, useState } from 'react'
import "./styles.css"
const ScrollIndicator = ({url}) => {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [scrollPercentage,setScrollPercentage] = useState(0);
  const fetchData = async (getURL)=>{
    try {
      setIsLoading(true);
      const response = await fetch(getURL);
      const result = await response.json();
  
      
      if(result && result.products && result.products.length > 0){
        setData(result.products);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false);
    }

  }
  useEffect(()=>{
    fetchData(url);
  },[url])

  const handleScrollPercentage = ()=>{
    // console.log(document.body.scrollTop)
    // console.log(document.documentElement.scrollTop)
    // console.log(document.documentElement.scrollHeight)
    // console.log(document.documentElement.clientHeight)
    
    const distScrolledFromTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage((distScrolledFromTop/pageHeight)*100);
  }


  useEffect(()=>{
    window.addEventListener("scroll",handleScrollPercentage);
    return ()=>{
        window.removeEventListener("scroll",()=>{});
    }
  },[]);

  console.log(scrollPercentage);

  if(isLoading)return(<div>Loading...</div>)
  return (
    
    <div className='main'>
      
      <div className="top-element">
      <h1 >Custom Scroll Indicator</h1>
        <div className="progress-bar" style={{width:`${scrollPercentage}%`}}>

        </div>
      </div>
      
      {
        data && data.length > 0 ?
        data.map((item,index)=>(
          <h4 key={index}>{item.title}</h4>
        ))
        :null
      }
    </div>
  )
}

export default ScrollIndicator
