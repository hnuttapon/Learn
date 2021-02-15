import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "./Video.css";

function CreateSection(props) {
  // const [isExpanded, setExpanded] = useState(false);

  const [section, setSection] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setSection(prevSection => {
      return {
        ...prevSection,
        [name]: value
      };
    });
  }

  function submitsection(event) {
    props.onAdd(section);
    setSection({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={section.title}
          placeholder="Add a section"
        />  
        <Fab onClick={submitsection}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateSection;
