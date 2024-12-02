import react,{useState} from "react";
import { VscCircleLarge } from "react-icons/vsc";
import "./style.css"
const ImageSlider = ()=>{
    const imageUrls = [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=800",
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&w=800",
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&w=800",
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&w=800",
        "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?crop=entropy&cs=tinysrgb&w=800",
    ];

    const [currImage,setCurrImage] = useState(imageUrls[0]);

    const handlePrevClick = ()=>{
        if(imageUrls.indexOf(currImage) === 0){
            setCurrImage(currImage);
            return;
        }

        let index = imageUrls.indexOf(currImage);
        setCurrImage(imageUrls[index-1]);
    }
    const handleNextClick = ()=>{
        if(imageUrls.indexOf(currImage) === imageUrls.length-1){
           setCurrImage(imageUrls[imageUrls.length-1]);
           return;
        }
        
        let index = imageUrls.indexOf(currImage);
        setCurrImage(imageUrls[index+1]);
    }

    const handleCircleClick = (getCurrIndex)=>{
        setCurrImage(imageUrls[getCurrIndex]);
    }
    
    return <div className="main">
        <div className="imageContainer">
            <div className="btn-container">
            <button onClick={()=>handlePrevClick()}>Prev</button>
            <button onClick={()=>handleNextClick()}>Next</button>
            </div>
        {
            <img src={currImage} alt="" width={"300px"} height={"300px"}/>
        }
        <div className="icon-container">
            {[...Array(imageUrls.length)].map((_,index)=>
                <VscCircleLarge
                key={index}
                onClick={()=>handleCircleClick(index)}
                />
            )
        }
        </div>

        
        </div>
    </div>
}

export default ImageSlider;