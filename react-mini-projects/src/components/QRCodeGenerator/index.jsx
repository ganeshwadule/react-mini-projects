import React, { useState } from 'react'
import QRCode from "react-qr-code"
const QRCodeGenerator = () => {
    const [qrcode,setQrcode] = useState("");
    const [input,setInput] = useState("");
    const Generate = ()=>{
        setQrcode(input);
    }
  return (
    <div>
      <h1>Generate QR Code</h1>
      <input onChange={(e)=>setInput(e.target.value)} type="text" />
      <button onClick={()=>Generate()}>Generate</button>
    <div className="qr">
        <QRCode id="qrcode" value={qrcode}  style={{background:"#fff"}}/>
    </div>
    </div>
  )
}

export default QRCodeGenerator
