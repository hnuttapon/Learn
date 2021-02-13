import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginLeft:'auto',
    marginRight:'auto',
  },
  heading: {
    fontWeight:'550',
    fontSize:'18px',
    color:'black',
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion style={{backgroundColor:props.backgroundColor}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'black'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row" style={{width:"100%"}}>
            <div className="col-xl-9" >
              <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'20px',paddingTop:'5px', paddingBottom:'5px',marginLeft:'2%',textAlign:'justify'}}>
                {props.topic}
              </h2>
            </div>
            <div className="col-xl-3">
              <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'20px',paddingTop:'5px', paddingBottom:'5px',marginLeft:'2%',textAlign:'justify'}}>
                {props.time}
              </h2>
            </div>
          </div>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
