import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles({
  root: {
    maxWidth: 238,
    maxHeight: '240px',
    borderRadius:'20px',
    marginBottom:'0px',
    marginTop: '0px'
  },
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
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center',fontSize:'17px',color:'black',fontWeight:'700',height:'80px'}}>
            {props.coursename}
          </Typography>
          <div style={{ display: "flex", alignItems: "center", color: "#000000c4" }} >
              <DateRangeIcon style={{ marginRight: 5 }} />
              <Typography variant="body2" style={{ marginLeft: 1, textAlign: "left" }}>{" "}<span style={{ fontWeight: 500 }}>{props.duration}</span>{" "}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}