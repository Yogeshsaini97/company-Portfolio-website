import React from 'react'
import "./Footer.css"
import wave from "../images/wave.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';




const Footer = (props) => {
  return (
    <div className='footer' style={{top: props.top,
      transform: props.rotate, height: props.height}}>
      <img src={wave} alt="not found!!"/>
      <div className='footercontent'>
      <div>Designed & Manufactured by YOGESH SAINI</div>
      <div>yogeshsaini2912@gmail.com</div>
      <InstagramIcon className='mx-3 my-3' style={{scale:"1.5"}}/>
      <FacebookIcon className='mx-3 my-3' style={{scale:"1.5"}}/>
      <GitHubIcon className='mx-3 my-3' style={{scale:"1.5"}}/>
      
      
     
      </div>
    </div>
  )
}

export default Footer;
