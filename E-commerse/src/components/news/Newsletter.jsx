import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';

const Newsletter = () => {
  return (
    <>
    <div 
    style={{height:"330px",backgroundColor:"rgba(240, 240, 240, 0.67)",borderTop:"0.2px black",}}
    >
        <div 
        style={{height:"130px",width:"800px",alignItems:"center",textAlign:"center",paddingTop:"20px",justifyContent:"center",marginRight:"auto",marginLeft:"auto"}}
        >
            <h1>News Letter</h1>
            <p style={{fontSize:"13px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div>
        <div className='d-flex justify-content-center align-items-center mt-1'>
            <input type="email" placeholder='Enter your email' className='form-control'
            style={{height:"45px",width:"500px"}}
            />
            <button className='btn btn-success ms-2'
            style={{height:"45px"}}
            >Send Email</button>

        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",marginTop:"20px"}}>
<a href="https://www.facebook.com/"><FacebookSharpIcon style={{fontSize:"30px"}}/></a>
        <a href="https://www.youtube.com/"><YouTubeIcon style={{fontSize:"30px"}}/></a>
        <a href="https://www.instagram.com/"><InstagramIcon style={{fontSize:"30px"}}/></a>
        <a href="https://www.linkedin.com/"><LinkedInIcon style={{fontSize:"30px"}}/></a>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",marginTop:"20px"}}>
            <h6>© 2023 Commercehope. All rights reserved</h6>
        </div>
    </div>
    </div>
    </>
  )
}

export default Newsletter