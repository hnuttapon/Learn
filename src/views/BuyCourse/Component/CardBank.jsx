import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles({
  root: {
    width: 280,
    marginLeft:'auto',
    marginRight:'auto',
    'z-index': 3,
  },
  media: {
    height: 140,
    'z-index': 1,
  },

 
 
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
 
        <div className="feature-box">
          
          <Card className={classes.root}>
            <CardActionArea>      
              <CardMedia
                className={classes.media}
                image={props.img}
                title="Contemplative Reptile"
              />    
              <center>
              <CardContent style={{backgroundColor:'white'}}>
              <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'20px',paddingTop:'5px', paddingBottom:'0px',marginLeft:'2%',textAlign:'center'}}>
                ชื่อบัญชี
              </h2>
              <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'20px',paddingTop:'0px', paddingBottom:'5px',marginLeft:'2%',textAlign:'center'}}>
                บริษัท ไทยโพลิเอททีลีน จํากัด
              </h2>
              <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'20px',paddingTop:'5px', paddingBottom:'5px',marginLeft:'2%',textAlign:'center'}}>
                {props.account}
              </h2>
              <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'17px',paddingTop:'5px', paddingBottom:'0px',marginLeft:'2%',textAlign:'center'}}>
                สาขา
              </h2>
              <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'17px',paddingTop:'0px', paddingBottom:'5px',marginLeft:'2%',textAlign:'center'}}>
                {props.branch}
              </h2>
              <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'17px',paddingTop:'5px', paddingBottom:'5px',marginLeft:'2%',textAlign:'center'}}>
                ประเภทบัญชี : ออมทรัพย์
              </h2>
              </CardContent>   
              </center>  
            </CardActionArea>   
          </Card>
          
        </div>

  );
}
