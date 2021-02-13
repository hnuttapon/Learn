import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { CallMissedSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    
    position:'relative',
  
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ImageAvatars = (props) => {
  const classes = useStyles();
  return (
  
    <div className={classes.root}>     
      <Avatar style={{width:props.width, height:props.height,marginLeft:props.marginLeft,marginTop:props.marginTop,backgroundColor:'orange',display:props.display,'z-index':props.zIndex}} alt="Remy Sharp" src={props.img} />
    </div>
  );
}

export default ImageAvatars;
