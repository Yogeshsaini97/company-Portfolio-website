import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import "./Card.css"


const Card = (props) => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  return (
    <motion.div 
       className="card box"
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]}}
      variants={{
        visible: { opacity: 1, scale: 1 },
        
      }}
    
    style={{ left: props.left,
        top: props.top}}>
    <div><img src={props.image} alt="not found!"/></div>
    <div style={{fontWeight:"700",fontSize:"28px"}}>{props.title}</div>
    <div className="mx-5" style={{fontSize:"17px"}} ><p>It is a long established fact that a reader will be ..</p></div>
    <div><button>Know More..</button></div>
      
    </motion.div>
  )
}

export default Card
