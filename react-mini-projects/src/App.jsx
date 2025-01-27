import { useState } from 'react'
import Accordion from './components/Accordion/Accordion'
import ColorGenerator from './components/colorGenerator'
import StarRating from './components/StarRating'
import ImageSlider from './components/ImageSlider'
import LoadMoreButton from './components/LoadMoreButton';
import QRCodeGenerator from './components/QRCodeGenerator';
import ThemeChange from "./components/ThemeChange";
import menus from './components/TreeViewNavigation/data';
import ScrollIndicator from './components/ScrollIndicatior'
import tabs from './components/Tabs/tabs'
import TabsTest from './components/Tabs/tabsTest'
import ModalTest from './components/Modal/ModalTest'
import GithubProfileFinder from './components/GithubProfileFinder/GithubProfileFinder'
import SearchCompletion from './components/search-auto-complete'
import TicTacToe from './components/TicTacToe/TicTacToe'
function App() {
  
  return (
    <>
    {/* <Accordion/> */}
    
     {/* <ColorGenerator /> */}
    {/* <StarRating noOfStars={5}/> */}
     {/* <ImageSlider/> */}
     {/*  */}
     {/* <LoadMoreButton/> */}
     {/* <QRCodeGenerator/> */}
     {/* <ThemeChange/> */}
     {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
      {/* <TabsTest/> */}
      {/* <ModalTest/> */}
      {/* <GithubProfileFinder/> */}
      {/* <SearchCompletion/> */}
      <TicTacToe/>
    </>
  )
}

export default App
