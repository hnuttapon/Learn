import React,{useState} from "react";
import "./Input.css";


function CourseInput(props) { 

    const [note, setNote] = useState({
        title: "",
      });

    function handleClick() {
        props.onDelete(props.id);
    }

    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
    }

  return (
    <div className="row" style={{marginBottom:'10px',marginLeft:'auto',marginRight:'auto'}}>
        <div>
            <form className="create-note">
                <input
                name={props.name}
                onChange={handleChange}
                placeholder={props.placeholder}
                value={props.value}
                />
            </form>
        </div>
    </div>

  );
}

export default CourseInput;
