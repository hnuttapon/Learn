import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function Topic(props) {
  
  function handleClick() {
    props.onDelete(props.id);
  }

  const [time, setTime] = useState({
    time: "",
    notekey: props.noteindex,
    chapkey: props.chapindex,
    topkey: props.id,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTopic((prevTopic) => {
      return {
        ...prevTopic,
        [name]: value
      };
    });
  }


  return (
    <div>
      <form className="create-note">
          <input 
            name="title"
            onChange={handleChange}
            value={topic.title}
            placeholder="Topic..."
          />   
          <Fab style={{backgroundColor:'#f5ba13'}} onClick={submitTopic}>
            <AddIcon />
          </Fab>
      </form>
      <button style={{backgroundColor:props.bgColor,border:'none',boxShadow:'none','margin-left': '10px'}} variant="contained" onClick={handleClick}><DeleteIcon style={{fontSize:40, color:'#fff'}}/></button>
    </div>
  );
}

export default Chapter;
