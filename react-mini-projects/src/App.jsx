import { useState } from 'react'
import Accordion from './components/Accordion'
import ColorGenerator from './components/colorGenerator'
import StarRating from './components/StarRating'
import ImageSlider from './components/ImageSlider'
import TikTakToe from './components/TikTakToe';
import LoadMoreButton from './components/LoadMoreButton';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Accordion/> */}
    
     {/* <ColorGenerator /> */}
    {/* <StarRating noOfStars={5}/> */}
     {/* <ImageSlider/> */}
     {/*  */}
     <LoadMoreButton/>
     </>
  )
}

export default App
