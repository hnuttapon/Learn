import React from "react";

function Topic(prop){
    return (
    <h1 style={{color:prop.color , marginBottom:prop.marginBottom, fontWeight:prop.fontWeight,marginLeft:prop.marginLeft,marginRight:prop.marginRight,fontSize:prop.fontSize,marginTop:prop.marginTop,paddingTop:prop.paddingTop,textAlign:prop.textAlign,display:prop.display,'font-family': 'Kanit, sans-serif'}} className="topics">{prop.name}</h1>
    );
}

export default Topic;