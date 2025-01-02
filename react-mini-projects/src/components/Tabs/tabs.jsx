import React, { useState } from 'react'
import "./tabs.css"
const tabs = ({tabsContent,handleOnChange}) => {

    const [currentTabIndex,setCurrentTabIndex] = useState(0);
    const handleOnClick = (index)=>{
      setCurrentTabIndex(index);
        handleOnChange(index); // call to Parent Componet
    }
  return (
    <div className="wrapper">

      <div className="heading">
        {
            tabsContent.map((tabItem,index)=>(
                <div className={`tabs ${index === currentTabIndex ? "active" : ""}`} onClick={()=>handleOnClick(index)} key={tabItem.label}>
                    <span >{tabItem.label}</span>
                </div>
            ))
        }
      </div>
      <div className="content">
        {
            // tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
            tabsContent[currentTabIndex]?.content
        }
        </div>
    </div>
  )
}

export default tabs;
