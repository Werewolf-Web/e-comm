import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GppGoodSharpIcon from '@mui/icons-material/GppGoodSharp';
import './warrantiy.css'
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';

const Warranty = () => {
  return (
    <>
    <div className='main-card' >
                <div className='sub-card'
              
                >
                    <div className='all-card'>
                            <AccessTimeIcon style={{fontSize:"43px",margin:"0px",paddingBottom:"5px"}}/><br/>
                            <label htmlFor="" style={{fontSize:"18px",fontWeight:"500"}}>10 Days Replacement</label>
                    </div>
                      <div className='all-card' >
                            <GppGoodSharpIcon style={{fontSize:"43px",margin:"0px",paddingBottom:"5px"}}/><br/>
                            <label htmlFor="" style={{fontSize:"18px",fontWeight:"500"}}>
1 year Warranty</label>
                    </div>
                    <div className='all-card' >
                            <VerifiedSharpIcon style={{fontSize:"43px",margin:"0px",paddingBottom:"5px"}}/><br/>
                            <label htmlFor="" style={{fontSize:"18px",fontWeight:"500"}}>100% Original</label>
                    </div>
                </div>
    </div>
    
    
    </>
  )
}

export default Warranty