import { useState } from 'react'
import Accordion from './components/Accordion'
import ColorGenerator from './components/colorGenerator'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Accordion/>
    
     <ColorGenerator />
     </>
  )
}

export default App
