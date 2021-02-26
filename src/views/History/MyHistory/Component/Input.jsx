import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
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
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12" align="center" >
            <h5 className="no">
                {props.no} 
            </h5>
        </div>

        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-11 col-11" align="center" >
            <form className="create-note">
                <input
                name={props.name}
                onChange={handleChange}
                placeholder={props.placeholder}
                value={props.value}
                />
            </form>
        </div>

        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1" align="left" >
            <button onClick={handleClick} style={{float:'right',marginTop:'25px',border:'none',boxShadow:'none',background:'none',marginRight:'70%'}}>
                <DeleteIcon style={{fontSize:'30px' ,color:'orange'}}/>
            </button>
        </div>
    </div>

  );
}

export default CourseInput;
