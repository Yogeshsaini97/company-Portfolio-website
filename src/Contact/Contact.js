import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [namevalue,setnamevalue]=useState("");
  const [emailvalue,setemailvalue]=useState("");
  const [messagevalue,setmessagevalue]=useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);




const sendmail=(e)=>
{

  e.preventDefault();

  console.log(namevalue + "  " + emailvalue + "  " + messagevalue)
    
  emailjs.send("service_2negs1a","template_mf5qype",{
    from_name: namevalue,
    to_name: "yogesh",
    email_id: emailvalue,
    message: messagevalue,
    reply_to: emailvalue,
    },"TKxRrzvtIGnDdDpD0").then(alert("Greate ! Your message has been sent!!"));


    setnamevalue("");
    setemailvalue("")
    setmessagevalue("")
   
  
}


  return (
    <motion.div
    
    ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 3,
        delay: 0.2,
        type :"spring",
        ease: [0, 0.71, 0.2, 1.01]}}
      variants={{
        visible: { opacity: 1, scale: 1 },
        
      }}
    
     className="contact box">
      <div id="Contact" className="leftpart">
        <div
          style={{
            fontSize: "78px",
            fontWeight: "700",
            margin: "0px 0px -43px 0px",
          }}
        >
          Get in touch
        </div>
        <div
          style={{
            fontSize: "78px",
            fontWeight: "700",
            color: "var(--orange)",
          }}
        >
          Contact me
        </div>
      </div>
      <div className="rightpart">
        <form>
        <div className="blur" style={{background: "var(--purpleblur)",position: "absolute",
        right: "191px",
    height: "488px",
    width: "544px",
    top: "68px"}}>hbjbj</div>
          <div className="form-group">
            <input
              type="Name"
              value={namevalue}
              onChange={(e)=>{setnamevalue(e.target.value)}}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name here..."
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              value={emailvalue}
              onChange={(e)=>{setemailvalue(e.target.value)}}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your Email here..."
            />
          </div>
          <div className="form-group">
            <textarea style={{height:"200px"}}
              className="form-control"
              value={messagevalue}
              onChange={(e)=>{setmessagevalue(e.target.value)}}
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter your Message here..."
            ></textarea>
          </div>
          <button onClick={sendmail} style={{height:"40px",position: "relative",
    top: "148px"}} className='mybtn'>Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
