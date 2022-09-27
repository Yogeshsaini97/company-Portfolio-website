import React from 'react'
import "./Floating.css"
import {motion} from "framer-motion";

function Floating(props) {
  return (
    <motion.div
       animate={{ x: -100 }}
  transition={{duration:2, type :"spring"}}
      className="outerfloat"
      style={{
        position: "absolute",
        left: props.right,
        top: props.left,
        zIndex: "1",
      }}
    >
      <div style={{ scale: "40%" }}>
        <img src={props.image} alt="" />
      </div>
      <div>{props.text}</div>
    </motion.div>
  );
}

export default Floating;
