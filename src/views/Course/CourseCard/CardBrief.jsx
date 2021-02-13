import React from "react";
import Topic from "../CourseCard/Component/Topic";


const CardBrief = (props) => {
  return (
    <div className="row margin5" style={{background:'ghostwhite',borderRadius:'10px',marginTop:'10px',width:'95%'}}>
        <div
            className="col-xl-5 col-lg-8 col-md-8 col-sm-12"
            style={{ paddingRight: "0%", paddingLeft: "0%" }}
        >
            <img
            style={{borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}
            alt="Online"
            width = "100%"
            height = "100%"
            src= {props.img}            
            />
        </div>
        <div className="col-xl-7 col-lg-4 col-md-4 col-sm-12">
            <h2
            style={{
                color: "#235789",
                "font-family": "Kanit, sans-serif",
                fontWeight: "450",
                fontSize: "20px",
                marginTop: "15px",
                textAlign:'left',
            }}
            >
            Online
            </h2>
            <Topic
            name={props.coursename}
            fontSize="20px"
            color="black"
            fontWeight="500"
            textAlign="left"
            />
            <Topic
            name= "time : "
            marginLeft="0.1%"
            fontSize="20px"
            color="black"
            fontWeight="500"
            display="inline"
            textAlign="left"
            />
            <span>
            <Topic
            name= {props.time}
            marginLeft="0.1%"
            fontSize="20px"
            color="black"
            fontWeight="500"
            display="inline-block"
            textAlign="left"
            /></span>
        </div>
    </div>  
  );
};

export default CardBrief;
