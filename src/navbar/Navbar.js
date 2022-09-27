import React from 'react'
import "./Navbar.css"
import wave from "../images/wave.png"
import {Link} from "react-scroll";

function Navbar() {

  return (
  
  <>
 
    <div className='navcomponent my-3'>
    
 
    <div>
    <div className="blur" style={{background: "var(--blueblur)",position: "absolute",
    left: "40%",
    top: "-724%",borderRadius:"100%"}}></div>
    <span style={{position: "absolute",
    left: "198px"}}>Andrew</span>
    </div>
    <div>
<span >
    <ul style={{position:"relative",top:"12px"}} >
        <Link to="Home" smooth={true}>
        <li>Home</li>
        </Link>
        <Link to='Services' smooth={true}>
        <li>Services</li>
        </Link>
        <Link to="Experience" smooth={true}>
        <li>Experience</li>
        </Link>
        <Link to="Portfolio" smooth={true}>
        <li>Portfolio</li>
        </Link>
        <Link to="Testimonials" smooth={true}>
        <li>Testimonials</li>
        </Link>
        <Link to="Contact" smooth={true}>
        <li><button className='mybtn ' style={{position:"relative",top:"-6px"}}>Contact</button></li>
        </Link>
    </ul>
</span>
    </div>
      
    </div>
    </>
  )
}

export default Navbar;
