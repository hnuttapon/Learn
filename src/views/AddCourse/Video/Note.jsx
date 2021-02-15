import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function Note(props) {
  
  function handleClick() {
    props.onDelete(props.id);
  }

  const [chapter, setChapter] = useState({
    title: "",
    notekey: props.id,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setChapter((prevChapter) => {
      return {
        ...prevChapter,
        [name]: value
      };
    });
  }

  function submitChapter(event) {
    props.addChapter(chapter);
    setChapter({
      title: "",
      notekey: props.id,
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
          <input 
            name="title"
            onChange={handleChange}
            value={chapter.title}
            placeholder="Chapter..."
          />   
          <Fab onClick={submitChapter}>
            <AddIcon />
          </Fab>
      </form>
      <button style={{backgroundColor:props.bgColor,border:'none',boxShadow:'none','margin-left': '10px'}} variant="contained" onClick={handleClick}><DeleteIcon style={{fontSize:40, color:'#fff'}}/></button>
    </div>
  );
}

export default Note;
