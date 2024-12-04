import React from 'react'
import useLocalStorage from './useLocalStorage'
import "./style.css"
const ThemeChange = () => {

    const [theme,setTheme] = useLocalStorage("theme","dark");
    const handleToggleTheme = ()=>{
        setTheme(theme === "dark" ? "light":"dark");
    }
  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <h1>Hello World</h1>
      <button onClick = {()=>handleToggleTheme()} >Change Theme</button>
    </div>
  )
}

export default ThemeChange
