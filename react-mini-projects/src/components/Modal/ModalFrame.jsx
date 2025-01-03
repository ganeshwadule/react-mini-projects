import React from 'react'
import "./Modal.css"
const ModalFrame = ({handleModalOpen,isModelOpen}) => {
    const handleOnClick = ()=>{
        handleModalOpen(!isModelOpen);
    }
  return (
    <div className='wrapper'>
      <div className="container">
        <button onClick={handleOnClick} className='close-btn'>close</button>
        This is example of model
      </div>
    </div>
  )
}

export default ModalFrame
