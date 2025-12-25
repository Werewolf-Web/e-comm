import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GppGoodSharpIcon from '@mui/icons-material/GppGoodSharp';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';

const Warranty = () => {
  return (
    <>
    <div  style={{
       backgroundColor:"rgba(240, 240, 240, 0.67)",
          width: "70%",
          margin: "auto",
          marginTop:"25px",
          marginBottom:"20px",
          height:"auto",
          borderRadius: "10px",
          display: "flex",
          gap: "30px",
          padding: "30px",
          flexWrap: "wrap",
        }}>
                <div 
                style={{display:"flex",gap:"25px"}}
                >
                    <div style={{
                        backgroundColor:"#3e4bd7ff",
                        width:"310px",height:"150px",borderRadius:"10px",textAlign:"center",color:"#ffffff",paddingTop:"35px"
                    }}>
                            <AccessTimeIcon style={{fontSize:"43px",margin:"0px",paddingBottom:"5px"}}/><br/>
                            <label htmlFor="" style={{fontSize:"18px",fontWeight:"500"}}>10 Days Replacement</label>
                    </div>
                      <div style={{
                        backgroundColor:"#3e4bd7ff",
                        width:"310px",height:"150px",borderRadius:"10px",textAlign:"center",color:"#ffffff",paddingTop:"35px"
                    }}>
                            <GppGoodSharpIcon style={{fontSize:"43px",margin:"0px",paddingBottom:"5px"}}/><br/>
                            <label htmlFor="" style={{fontSize:"18px",fontWeight:"500"}}>
1 year Warranty</label>
                    </div>
                    <div style={{
                        backgroundColor:"#3e4bd7ff",
                        width:"310px",height:"150px",borderRadius:"10px",textAlign:"center",color:"#ffffff",paddingTop:"35px"
                    }}>
                            <VerifiedSharpIcon style={{fontSize:"43px",margin:"0px",paddingBottom:"5px"}}/><br/>
                            <label htmlFor="" style={{fontSize:"18px",fontWeight:"500"}}>100% Original</label>
                    </div>
                </div>
    </div>
    
    
    </>
  )
}

export default Warranty