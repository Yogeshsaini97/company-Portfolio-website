import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./experience.css"


const Experience = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  return (
    <motion.div
     ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8,
        duration: 2,
        type :"spring",
        ease: "easeInOut"}}
      variants={{
        visible: { opacity: 1, scale: 1 },
        
      }}
    
      
   className='experience box'>
    <div><div><span>8+</span></div><span>years</span><span>Experience</span></div>
    <div><div><span>20+</span></div><span>completed </span><span>Projects</span></div>
    <div><div><span>5+</span></div><span>companies</span><span>Work</span></div>
      
    </motion.div>
  )
}

export default Experience;
