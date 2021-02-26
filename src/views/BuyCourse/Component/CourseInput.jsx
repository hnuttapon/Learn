import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./CourseInput.css"


function CourseInput(props) { 

    function handleClick() {
        props.onDelete(props.id);
      }

  return (
    <div className="row" style={{marginBottom:'10px'}}>
        <div className="col-xl-12">
            <h2 style={{color:"white",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'28px',marginTop:'20px',float:'left',display:'inline',backgroundColor:'#329D9C',padding:'4px',width:'50px',borderRadius:'40%'}}>
                {props.no} 
            </h2>
            <button onClick={handleClick} style={{float:'right',marginTop:'25px',border:'none',boxShadow:'none',background:'none'}}>
                <DeleteIcon style={{fontSize:'30px' ,color:'orange'}}/>
            </button>
        </div>
        <div className="col-xl-6">
            <form className="createMember">
                <input
                name="name"
                placeholder="Name"
                />
            </form>
        </div>
        <div className="col-xl-6">
            <form className="createMember">
                <input
                name="email"
                placeholder="Email"
                />
            </form>
        </div>
        <div className="col-xl-6">
            <form className="createMember">
                <input
                name="phone"
                placeholder="Phone number"
                />
            </form>
        </div>
        <div className="col-xl-6">
            <form className="createMember">
                <input
                name="position"
                placeholder="Position (option)"
                />
            </form>
        </div>
        
    </div>

  );
}

export default CourseInput;
