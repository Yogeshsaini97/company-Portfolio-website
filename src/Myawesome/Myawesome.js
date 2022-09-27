import React from "react";
import Card from "./Card";
import "./Myawesome.css";
import heart from  "../images/heartemoji.png"
import glasses from  "../images/glasses.png"
import humble from  "../images/humble.png"



const Myawesome = () => {
  return (
    <div className="Myawesome  mx-5" id="Services">
      <div className="blur" style={{background: "var(--purpleblur)",position: "absolute",
    left: "-8%",
    top: "-17%",borderRadius:"100%"}}>hbjbj</div>
      <div style={{ Display: "flex", FlexDirection: "column" }}>
        <div
          className="mx-5"
          style={{
            fontSize: "78px",
            fontWeight: "700",
            paddingRight: "32%",
            margin: "0px 0px -43px 0px",
          }}
        >
          My Awesome
        </div>
        <div
          style={{
            fontSize: "78px",
            fontWeight: "700",
            margin: "0px 0px -43px 0px",
            color: "var(--orange)",
            paddingRight: "52%"
          }}
        >
          Services
        </div>
        <div className="lorem" style={{ fontSize: "18px",    marginLeft: "9%",
    marginTop: "5%"}}>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout..
        </p>
        <button style={{position:"relative",right:"40%"}} className='mybtn'>Hire Me </button>
      </div>
      </div>
    

      <div>
      <Card image={heart} title="Design" left="73%" top="-44%"/>
      <Card image={glasses} title="Developer" left="43%" top="48%"/>
      <Card image={humble} title="UI/UX" left="70%" top="108%"/>
      




      </div>
      <div className="blur" style={{background: "var(--blueblur)",position: "absolute",
    right: "3%",
    top: "86%",borderRadius:"100%"}}>hbjbj</div>
      
    </div>
  );
};

export default Myawesome;
