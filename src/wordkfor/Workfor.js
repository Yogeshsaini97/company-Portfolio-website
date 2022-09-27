import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Workfor.css"
import upwork from "../images/Upwork.png";
import fiver from "../images/fiverr.png";
import amazon from "../images/amazon.png";
import shopify from "../images/Shopify.png";
import facebook from "../images/Facebook.png";


const Workfor = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <>
        <div className="Myawesome Myawesome2  mx-5" id="Experience" style={{position: "relative",
    top: "1800px"}} >
     <div className="blur" style={{background: "var(--blueblur)",position: "absolute",
    left: "-8%",
    top: "-11%",borderRadius:"100%"}}>hbjbj</div>
      <div style={{ Display: "flex", FlexDirection: "column" }}>
        <div
          className="mx-5"
          style={{
            fontSize: "72px",
            fontWeight: "700",
            paddingRight: "17%",
            margin: "0px 0px -43px 0px",
          }}
        >
          Works for All these
        </div>
        <div
          style={{
            fontSize: "78px",
            fontWeight: "700",
            margin: "0px 0px -43px 0px",
            color: "var(--orange)",
            paddingRight: "20%"
          }}
        >
          Brands & Clients
        </div>
        <div className="lorem" style={{ fontSize: "18px",    marginLeft: "9%",
    marginTop: "5%"}}>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout 
        </p>
        <button style={{position:"relative",right:"40%"}} className='mybtn'>Hire Me </button>
      </div>
      </div>
    

     
   
      
    <div
   
   
    
    
    >
        <motion.div 
        
        ref={ref}
      animate={controls}

      
      transition={{ 
        duration: 3.5,
        ease: "easeInOut"}}
      variants={{
        visible:{rotate: [-50,0]},
        
      }}


        className='outerbigcircle box'>
        
        <div style={{position: "relative",left: "162px",top: "-60px"}}><img src={upwork} alt="not found!"/></div>
        <div style={{position: "relative",left: "-65px",top: "-8px"}}><img src={fiver} alt="not found!"/></div>
        <div style={{position: "relative",left: "387px",top: "-148px"}}><img src={shopify} alt="not found!"/></div>
        <div style={{position: "relative",left: "161px",top: "-278px"}}><img src={amazon} alt="not found!"/></div>
        <div style={{position: "relative",left: "162px",top: "-198px"}}><img src={facebook} alt="not found!"/></div>

        </motion.div>
        <div className='bluecircle'></div>
        <div className='yellowcircle'></div>
       
    </div>
    


 

    </div>

        </>

   
  )
}

export default Workfor
