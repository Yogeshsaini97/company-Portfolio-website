import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper,SwiperSlide } from 'swiper/react';
import "./Exceptional.css"
import { Pagination } from 'swiper';
import "swiper/css/pagination";
import "swiper/css";
import profile3 from "../images/profile3.jpg";
import profile4 from "../images/profile4.jpg";
import profile5 from "../images/profile5.jpg";
import profile6 from "../images/profile6.jpg";

const Exceptional = () => {

 

    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    

  return (
    <div className='exceptional' id="Testimonials">
    <div className='my-5'>
      <span  style={{
          fontSize: "52px",
          fontWeight: "700",
        }}>Clients always get </span>
      <span  style={{
          fontSize: "52px",
          fontWeight: "700",
          color: "var(--orange)"
        }}>Exceptional Work </span>
      <span style={{
          fontSize: "52px",
          fontWeight: "700",
          marginRight: "127px"
        }}>from me...</span>
        </div>
        <div className='review'>
        <div className="blur" style={{border:"2px solid orange",background: "var(--purpleblur)",position: "absolute",
    right: "107px",height:"432px",width:"432px",top:"300px"}}>hbjbj</div>
        <div className="blur" style={{border:"2px solid orange",background: "var(--blueblur)",position: "absolute",
    right: "895px",
    top: "50px",height:"432px",width:"432px"}}>hbjbj</div>
    <motion.div
    className='box'
    ref={ref}
      animate={controls}
      initial={{ y:400}}
      transition={{ 
        duration: 1,
        type :"spring",
        ease: "easeInOut"}}
      variants={{
        visible: { y:0},
    
        
      }}
    
    >
        <Swiper
        pagination={{clickable:true}}
        modules={[Pagination]}
        slidesPerView={1}
        grabCursor={true}
        
        
        >
         <SwiperSlide>
                <div className='insideslider'>
                   <img src={profile6} alt="not found"/>
                   <span className='mx-5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='insideslider'>
                   <img src={profile5} alt="not found"/>
                   <span className='mx-5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='insideslider'>
                   <img src={profile4} alt="not found"/>
                   <span className='mx-5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='insideslider'>
                   <img src={profile3} alt="not found"/>
                   <span className='mx-5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='insideslider'>
                   <img src={profile6} alt="not found"/>
                   <span className='mx-5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='insideslider'>
                   <img src={profile5} alt="not found"/>
                   <span className='mx-5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
            </SwiperSlide>
            
        </Swiper>
        </motion.div>



        </div>
    </div>
  )
}

export default Exceptional;
