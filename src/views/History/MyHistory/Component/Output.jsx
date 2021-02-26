import React,{useState} from "react";
import "./Output.css";

function outputShow(props) {
    
  return (
    <div className="row" style={{marginBottom:'10px',marginLeft:'auto',marginRight:'auto'}}>
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12" align="center" >
            <h5 className="no">
                {props.no} 
            </h5>
        </div>

        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-11 col-11" align="center" >
            <div className="outputBox">
                <h3 style={{color:'black',fontWeight:'300',fontSize:'20px',textAlign:'left', verticalAlign: 'middle'}}>
                    {props.value}
                </h3>
            </div>
        </div>
       
    </div>

  );
}

export default outputShow;
