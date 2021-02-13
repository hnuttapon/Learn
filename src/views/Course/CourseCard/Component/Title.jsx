import React from "react";

function Title(props){
    return (
    <h1 style={{marginLeft:props.marginLeft,marginRight:props.marginRight,marginBottom:props.marginBottom,marginTop:props.marginTop,color:props.color,display:props.display,padding:props.padding,'font-family': 'Kanit, sans-serif'}} className="titles">{props.name}</h1>
    );
}

export default Title;