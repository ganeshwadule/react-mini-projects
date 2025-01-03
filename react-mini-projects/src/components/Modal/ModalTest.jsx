import React, {useState} from 'react'
import ModalFrame from './ModalFrame';
import "./Modal.css"
const ModalTest = () => {

    const [isModelOpen,setIsMOdelOpen] = useState(false);

    const handleModalOpen = ()=>{
        setIsMOdelOpen(!isModelOpen);
    }

  return (
    <div className='main'>
      <button className="btn" onClick={handleModalOpen} style={{width:"100px"}} >Open modal</button>
      {
        isModelOpen && <ModalFrame handleModalOpen = {handleModalOpen} isModelOpen={isModelOpen}/>
      }
    </div>
  )
}

export default ModalTest
