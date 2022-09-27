import React from 'react'
import "./Hyiam.css";
import boy from "../images/boy.png";
import vec1 from "../images/Vector1.png";
import vec2 from "../images/Vector2.png";
import Floating from './Floating';
import crown from "../images/crown.png"
import thumsup from "../images/thumbup.png"
import glassemoji from "../images/glassesimoji.png"
import {motion} from "framer-motion";

function Hyiam () {

const transition={duration:2, type :"spring"};

  return (<>
    <div className="upper my-5" id='Home' >
        <div className="mx-5" >
            <div style={{fontSize:"78px",fontWeight:"700",margin: "0px 0px -43px 0px"
}} >Hy! I Am</div>
            <div style={{fontSize:"78px",fontWeight:"700",color:"var(--orange)"}}>Andrew Thomas</div>
            <div  style={{fontSize:"18px"}} className='lorem'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..</p></div>
            <button style={{height:"40px"}} className='mybtn'>Hire Me </button>
        </div>
        <div >
            <div><img src={boy} className="boy" alt="Responsive image"/></div>
            <div><img src={vec1} className="blue" alt="Responsive image"/></div>
            <div><img src={vec2} className="yellow" alt="Responsive image"/></div>
        </div>
        <div className="blur" style={{background: "var(--purpleblur)",position: "absolute",
    right: "28px",borderRadius:"100%"}}>hbjbj</div>
        <div className="blur" style={{background: "var(--blueblur)",position: "absolute",
    right: "411px",
    top: "398px",borderRadius:"100%"}}>hbjbj</div>
    </div>
    <Floating right="1360px" left="339px" image={crown} text="Web Developer"/>
    <Floating right="930px" left="625px" image={thumsup} text="Best Design Award"/>
    <div style={{    position: "absolute",
    top: "194px",
    scale: "0.6",
    left: "100px"}}>
    <motion.img
    
    animate={{ x: 1000 }}
  transition={{duration:4, type :"spring"}}
 
     src={glassemoji}  alt="loading"/></div>
    
    
    </>
  )
}

export default Hyiam;