import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    borderRadius:'20px',
    marginBottom:'25px',
  },
  detailbox:{
    backgroundColor:'#4D5359',
    padding:'1px',
    paddingTop:'11px',
    marginTop:'28px',
    textAlign:'center',
    width:'100%',
    color:'white',
    'box-shadow': '20px 20px #BCD8B7',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  authorbox:{
    backgroundColor:'#3C7A89',
    padding:'1px',
    paddingTop:'11px',
    width:'100%',
    color:'white',
    'box-shadow': '20px 20px #BCD8B7',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="130"
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center',fontSize:'20px',color:'black',fontWeight:'700',height:'80px'}}>
            {props.coursename}
          </Typography>
                <center>
                  <p style={{color:'grey'}}>Finished Date : 1 Jan 2021</p>           
                </center>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}