import React from 'react'
import Tab from "./tabs";
const tabsTest = () => {
    const tabsContent = [
        {
            label:"Daily",
            content:"Set Daily Goals"
        },

        {
            label:"Weekly",
            content:"Set Weekly Goals"
        },
        {
            label:"Monthly",
            content:"Set Monthly Goals"
        }
        
    ]

    const handleOnChange = (currentTabIndex)=>{
        console.log(currentTabIndex);
    }

  return (
   <Tab tabsContent={tabsContent} onChange={handleOnChange} />
  )
}

export default tabsTest;
