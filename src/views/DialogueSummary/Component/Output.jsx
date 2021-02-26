import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Output.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateIcon from '@material-ui/icons/Create';
 


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

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [del, setDel] = useState(false);

    const handleClickOpenDel = () => {
        setDel(true);
    };

    const handleCloseDel = () => {
        setDel(false);
    };

  return (
    <div className="row" style={{marginBottom:'10px'}}>
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12" align="center" >
            <h5 className="no">
                {props.no} 
            </h5>
        </div>

        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-11 col-11" align="center" >
            <div className="outputBox">
                <h3 style={{color:'black',fontSize:'20px',fontWeight:'300',textAlign:'left', verticalAlign: 'middle'}}>
                    {props.value}
                </h3>
            </div>
        </div>

        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1" align="left">
            <button onClick={handleClickOpen} style={{float:'left',marginTop:'30px',border:'none',boxShadow:'none',background:'none'}}>
                <CreateIcon style={{fontSize:'25px' ,color:'ED6A5A'}}/>
            </button>
            <button onClick={handleClickOpenDel} style={{float:'right',marginTop:'30px',border:'none',boxShadow:'none',background:'none'}}>
                <DeleteIcon style={{fontSize:'25px' ,color:'orange'}}/>
            </button> 
        </div>
        

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{fontFamily: 'Kanit, sans-serif'}}>แก้ไข</DialogTitle>
                <DialogContent style={{width:'600px'}}>
                    <DialogContentText style={{fontFamily: 'Kanit, sans-serif'}}>
                        กรุณาพิมพ์คำตอบใหม่ในพื้นที่ด้านล่าง 
                    </DialogContentText>
                    <TextField style={{fontFamily: 'Kanit, sans-serif'}}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="คำตอบใหม่"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{fontFamily: 'Kanit, sans-serif'}} color="warning">
                        ยกเลิก
                    </Button>
                    <Button onClick={handleClose} style={{fontFamily: 'Kanit, sans-serif'}} color="danger">
                        บันทึก
                    </Button>
                 </DialogActions>
        </Dialog>

        <Dialog open={del} onClose={handleCloseDel} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{fontFamily: 'Kanit, sans-serif'}}>ลบ</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCloseDel} style={{fontFamily: 'Kanit, sans-serif'}} color="primary">
                        ยกเลิก
                    </Button>
                    <Button onClick={handleCloseDel} style={{fontFamily: 'Kanit, sans-serif'}} color="primary">
                        ลบ
                    </Button>
                 </DialogActions>
        </Dialog>
       
    </div>

  );
}

export default CourseInput;
