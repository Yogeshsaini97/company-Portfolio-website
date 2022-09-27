import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Swiperss.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import ecommerce from "../images/ecommerce.png";
import hoc from "../images/hoc.png";
import musicapp from "../images/musicapp.png";
import sidebar from "../images/sidebar.png";



const Swiperss = () => {


  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <motion.div 
    id="Portfolio"
    ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]}}
      variants={{
        visible: { opacity: 1, scale: 1 },
        
      }}
    
    className="Swipercss box">
         <div className="blur"  style={{background: "var(--purpleblur)",position: "absolute",
    left: "53%",
    top: "-24%",borderRadius:"100%"}}>hbjbj</div>
      <div
        style={{
          fontSize: "72px",
          fontWeight: "700",
        }}
      >
        Recent Projects
      </div>
      <div
        style={{
          fontSize: "78px",
          fontWeight: "700",

          color: "var(--orange)",
        }}
      >
        Portfolio
      </div>
<div className="swiperkeandr my-5 mx-5">
<Swiper
spaceBetween={30}
slidesPerView={3}
grabCursor={true}
className="Swipercss-slider">

<SwiperSlide>
  <img src={hoc} alt="img not found!!"/>
</SwiperSlide>
<SwiperSlide>
  <img src={musicapp} alt="img not found!!"/>
</SwiperSlide>
<SwiperSlide>
  <img src={ecommerce} alt="img not found!!"/>
</SwiperSlide>
<SwiperSlide>
  <img src={sidebar} alt="img not found!!"/>
</SwiperSlide>
<SwiperSlide>
  <img src={musicapp} alt="img not found!!"/>
</SwiperSlide>

<SwiperSlide>
  <img src={hoc} alt="img not found!!"/>
</SwiperSlide>


</Swiper>
</div>


    </motion.div>
  );
};

export default Swiperss;
