import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "./Component/rating";
import PeopleIcon from '@material-ui/icons/People';
import Divider from '@material-ui/core/Divider';
import AlarmIcon from '@material-ui/icons/Alarm';
import Avatar from "./Component/avatar";
import Online from "./img/online.png";

const useStyles = makeStyles({
  root: {
    width: 290,
    'z-index': 3,
    borderRadius:'10px',
  },
  media: {
  height: 160,
    'z-index': 1,
  },
  tag:{
    height: 0,
    position:'relative',
	  width: '110px',
    top: '-9px',
    left: '104px',
    'z-index':2,
  },
  chip: {
    'background-color': '#828282',
    padding: '3px',
    paddingLeft: '5px',
    paddingRight: '5px',
    'font-size': '14px',
    color: '#ececec',
    'font-family': 'Open Sans, sans-serif',
    'border-radius': '16px',
    'vertical-align': 'middle',
    position:'relative',
    left: '-2px',
    display:'inline',
    height:'25px',
    margin: '0px 0px 0px 0',
  },
  top:{
    marginTop:'30px',
    width:'110%',
    backgroundImage:'yellow',
  },
  white:{
    color:'white',
  },
  Avatar:{
    position:'relative',
    top:'-7px',
  },
  detailbox:{
    backgroundColor:'#4D5359',
    padding:'10px',
    marginTop:'25px',
    textAlign:'left',
    width:'100%',
    color:'white',
    // 'box-shadow': '20px 20px #BCD8B7',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  authorbox:{
    backgroundColor:'#3C7A89',
    padding:'3px',
    width:'100%',
    color:'white',
    // 'box-shadow': '20px 20px #BCD8B7',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  
  function Hot() {
    if (props.hot === "true") {
      return <img alt="" width="24px" height="24px" style={{display:'inline',position:'relative',top:'-4px'}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS4yNjkgNTExLjI2OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTE0MC4zNjcsNDY1LjA2N0MxMTYuOSw0MzguNCw5My40MzQsNDEwLjY2Nyw3OC41LDM3Ny42Yy0xNC45MzMtMzUuMi0xOS4yLTc1LjczMy0xMS43MzMtMTE0LjEzMyAgczI0LjUzMy03NC42NjcsNDkuMDY3LTEwNS42Yy0yLjEzMywyNi42NjcsNy40NjcsNTQuNCwyNS42LDc0LjY2N2MtMTAuNjY3LTUxLjIsNi40LTEwNi42NjcsNDAuNTMzLTE0Ny4yUzI2My4wMzQsMTguMTMzLDMxMi4xLDAgIGMtMjQuNTMzLDI1LjYtMjcuNzMzLDY2LjEzMy0xOC4xMzMsMTAwLjI2N2M5LjYsMzQuMTMzLDI5Ljg2Nyw2NCw0OCw5NC45MzNjMTguMTMzLDMwLjkzMywzNS4yLDYyLjkzMywzNi4yNjcsOTguMTMzICBjOS42LTE4LjEzMywyMC4yNjctMzYuMjY3LDI2LjY2Ny01Ni41MzNjNi40LTIwLjI2Nyw5LjYtNDEuNiw0LjI2Ny02MS44NjdjMTkuMiwyMy40NjcsMjkuODY3LDQ2LjkzMywzNS4yLDc2LjggIGM1LjMzMywyOS44NjcsNC4yNjcsNjAuOCwxLjA2Nyw5MC42NjdjLTQuMjY3LDMzLjA2Ny0xMi44LDY3LjItMzAuOTMzLDk0LjkzM2MtMjEuMzMzLDMzLjA2Ny01NS40NjcsNTYuNTMzLTkyLjgsNjkuMzMzICBDMjU1LjU2Nyw1MTguNCwxOTAuNSw1MDguOCwxNDAuMzY3LDQ2NS4wNjd6IiBmaWxsPSIjZjM3MDVhIiBkYXRhLW9yaWdpbmFsPSIjZjM3MDVhIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTIyMS40MzQsNTA0LjUzM0MzMDguOSw1MzguNjY3LDM5NS4zLDQzNS4yLDM0Ny4zLDM1NS4yYzAtMS4wNjctMS4wNjctMS4wNjctMS4wNjctMi4xMzMgIGM0LjI2Nyw0My43MzMtNi40LDc1LjczMy0yNi42NjcsOTMuODY3YzEwLjY2Ny0yNS42LDMuMi01NS40NjctOS42LTgxLjA2N2MtMTIuOC0yNC41MzMtMzAuOTMzLTQ2LjkzMy00NC44LTcwLjQgIGMtMTMuODY3LTI0LjUzMy0yNC41MzMtNTIuMjY3LTE4LjEzMy04MGMtMjUuNiwxOS4yLTQzLjczMyw0OC01MS4yLDc4LjkzM2MtNy40NjcsMzAuOTMzLTMuMiw2NS4wNjcsMTAuNjY3LDkzLjg2NyAgYy0xNi0xMS43MzMtMjcuNzMzLTMwLjkzMy0yOC44LTUxLjJjLTE3LjA2NywyMC4yNjctMjcuNzMzLDQ2LjkzMy0yNi42NjcsNzMuNkMxNTEuMDM0LDQ1Mi4yNjcsMTg0LjEsNDg5LjYsMjIxLjQzNCw1MDQuNTMzeiIgZmlsbD0iI2ZmZDE1YyIgZGF0YS1vcmlnaW5hbD0iI2ZmZDE1YyI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
    }
  }

  function New() {
    if (props.new === "true") {
      return <img alt="" width="40px" height="40px" style={{display:'inline',position:'relative',top:'-4px'}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00My4wMyAyMS42NC00LjYzLTYuMzVjLTEuNTEtMi4wNy0zLjkxLTMuMjktNi40Ny0zLjI5aC0yMC43MmMtNC40MiAwLTggMy41OC04IDh2OGMwIDQuNDIgMy41OCA4IDggOGgyMC43MmMyLjU2IDAgNC45Ni0xLjIyIDYuNDctMy4yOWw0LjYzLTYuMzVjMS4wMy0xLjQxIDEuMDMtMy4zMSAwLTQuNzJ6bS03LjAzIDUuMzZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzeiIgZmlsbD0iI2ZmZTA2NiIgZGF0YS1vcmlnaW5hbD0iI2ZmZTA2NiIgc3R5bGU9IiI+PC9wYXRoPjxnPjxwYXRoIGQ9Im00My45IDIyLjQzYy0uMS4xLS4yMS4yLS4zMS4yOS0xLjQgMS4zLTIuOTEgMi4yLTQuMzQgMi42MS0uMjIuMDYtLjQzLjExLS42NC4xNS0uMzQuMDYtLjY2LjA5LS45Ny4wOS0xLjAxIDAtMS44Ni0uMzItMi40OS0uOTQtLjczLS43Mi0xLjA1LTEuOC0uOS0zLjA2LjQ5LS4zNiAxLjEtLjU3IDEuNzUtLjU3LjEyIDAgLjIzLjAxLjM1LjAzIDAgLjA5LS4wMS4xOC0uMDMuMjctLjEyLjUxLS4yNSAxLjQzLjI0IDEuOTEuNC4zOSAxLjE4LjQ3IDIuMTQuMi4wNy0uMDIuMTUtLjA0LjIyLS4wNyAxLjE1LS4zOCAyLjQyLTEuMiAzLjUxLTIuMjdsLjExLS4xMWMyLjI5LTIuMzUgMy4wMS01IDIuMTQtNS44Ni0uNzQtLjc1LTMuMDItLjMxLTUuMiAxLjU0LS4wMi4wMi0uMDQuMDMtLjA2LjA0bC0xLjAyLTEuMzljLS4wNS0uMDctLjExLS4xNC0uMTYtLjIxIDIuOTItMi40NSA2LjIyLTMuMDQgNy44Ni0xLjQgMS44MyAxLjg0Ljg3IDUuNjgtMi4yIDguNzV6IiBmaWxsPSIjNTA1MTRmIiBkYXRhLW9yaWdpbmFsPSIjNTA1MTRmIiBzdHlsZT0iIj48L3BhdGg+PC9nPjxwYXRoIGQ9Im00My42NiAyMy4wNTFjLS4wMjctLjExLS4wMzMtLjIyMy0uMDctLjMzMS0xLjQgMS4zLTIuOTEgMi4yLTQuMzQgMi42MS0uMjIuMDYtLjQzLjExLS42NC4xNS0uMDg1LjE1MS0uMTg3LjI5LS4yOTYuNDIzLjEtLjAxMy4xOTItLjAwOS4yOTYtLjAyNy4yMS0uMDQuNDItLjA5LjY0LS4xNSAxLjQzLS40MSAyLjk0LTEuMzEgNC4zNC0yLjYxLjAyMi0uMDIuMDQ2LS4wNDQuMDctLjA2NXoiIGZpbGw9IiNjY2FkNjYiIGRhdGEtb3JpZ2luYWw9IiNjY2FkNjYiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzguNzM1IDI2LjIzYy4xNDktLjI1Ny4yNDQtLjU0OC4zMDktLjg1Mi0uMTQ1LjAzNi0uMjkxLjA3NS0uNDM0LjEwMi0uNTEuOTEtMS40OSAxLjUyLTIuNjEgMS41Mi0xLjM2NSAwLTIuNS0uOTEyLTIuODY2LTIuMTU3LjA1IDEuNjE2IDEuMzYzIDIuOTA3IDIuOTkxIDIuOTA3IDEuMTIgMCAyLjEtLjYxIDIuNjEtMS41MnoiIGZpbGw9IiNjY2FkNjYiIGRhdGEtb3JpZ2luYWw9IiNjY2FkNjYiIHN0eWxlPSIiPjwvcGF0aD48ZyBmaWxsPSIjZjI1ZjVjIj48cGF0aCBkPSJtMTMuNTUgMTkuNDk2Yy0uNTUyIDAtMSAuNDQ4LTEgMXYzLjY1NGwtMi45ODMtNC4yM2MtLjI1MS0uMzU3LS43MDMtLjUxLTEuMTItLjM3Ny0uNDE1LjEzMS0uNjk3LjUxNy0uNjk3Ljk1M3Y2LjgwOGMwIC41NTIuNDQ4IDEgMSAxczEtLjQ0OCAxLTF2LTMuNjU0bDIuOTgzIDQuMjNjLjE5MS4yNzEuNDk5LjQyNC44MTcuNDI0LjEwMSAwIC4yMDMtLjAxNS4zMDItLjA0Ny40MTYtLjEzMi42OTgtLjUxNy42OTgtLjk1M3YtNi44MDhjMC0uNTUzLS40NDctMS0xLTF6IiBmaWxsPSIjZjI1ZjVjIiBkYXRhLW9yaWdpbmFsPSIjZjI1ZjVjIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE5LjgwMyAyNi4zMDNoLTIuMzQ0di0xLjQwNGgyLjAyYy41NTIgMCAxLS40NDggMS0xcy0uNDQ4LTEtMS0xaC0yLjAxOXYtMS40MDNoMi4xODZjLjU1MiAwIDEtLjQ0OCAxLTFzLS40NDgtMS0xLTFoLTMuMTg4LS4wMDFjLS41NTIuMDAxLS45OTkuNDQ4LS45OTkgMSAwIC4wMjMuMDAxLjA0Ny4wMDIuMDdsLS4wMDIgNi43MzdjMCAuMjY2LjEwNi41Mi4yOTQuNzA4cy40NDMuMjkzLjcwOC4yOTNoMy4zNDJjLjU1MiAwIDEtLjQ0OCAxLTFzLS40NDctMS4wMDEtLjk5OS0xLjAwMXoiIGZpbGw9IiNmMjVmNWMiIGRhdGEtb3JpZ2luYWw9IiNmMjVmNWMiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzAuOTA3IDE5LjU3M2MtLjUyNy0uMTM3LTEuMDguMTgzLTEuMjE4LjcxOWwtLjk0MyAzLjY2NS0xLjQwMS0zLjgxOWMtLjE0NS0uMzk0LS41Mi0uNjU1LS45MzgtLjY1NXMtLjc5NC4yNjItLjkzOC42NTVsLTEuNDAyIDMuODE5LS45NDMtMy42NjVjLS4xMzgtLjUzNS0uNjgtLjg1OC0xLjIxOC0uNzE5LS41MzUuMTM4LS44NTYuNjgzLS43MTkgMS4yMThsMS43NDQgNi43NzVjLjEwOS40MjQuNDgxLjcyOC45MTguNzQ5LjQzLjAyMS44MzctLjI0My45ODktLjY1NGwxLjU2OS00LjI3NiAxLjU2OSA0LjI3NmMuMTQ1LjM5NS41MjEuNjU1LjkzOC42NTUuMDE3IDAgLjAzMyAwIC4wNS0uMDAxLjQzOC0uMDIxLjgxLS4zMjUuOTE5LS43NDlsMS43NDQtNi43NzVjLjEzOC0uNTM2LS4xODUtMS4wODEtLjcyLTEuMjE4eiIgZmlsbD0iI2YyNWY1YyIgZGF0YS1vcmlnaW5hbD0iI2YyNWY1YyIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="  />
    }
  }

  return (
 
        <div className={classes.top}>
          <div className={classes.tag}>
              <img alt="Online" src={Online}  width="100" height="100" />
          </div>
          <Card className={classes.root}>
            <CardActionArea>      
              <CardMedia
                className={classes.media}
                image={props.img}
                title="Contemplative Reptile"
              />    
              <CardContent style={{minHeight:'293px'}}>
                
                <p  variant="h5" component="h2" style={{display:'inline-block', textAlign:'left',fontSize:'20px',marginBottom:'5px',color:'black',fontWeight:'700',height:'90px'}}>
                 {props.coursename}  {Hot()} {New()} {props.id}
                </p>

                <Rating rating={props.rating}></Rating>
                <p style={{display:'inline',fontWeight:'550',fontSize:'17px',float:'left',marginLeft:'10px'}}>{props.rating}{" "}</p>

                <div style={{marginBottom:'7px',marginTop:'32px', display:'block',position:'absolute'}}>
                  <p className={classes.chip} >{props.category1}</p>
                  <p className={classes.chip} style={{marginLeft:'7px'}}>{props.category2}</p>
                </div>
                
                <Divider className={classes.white} style={{marginTop:'50px',backgroundColor:'white'}}/>
                <div className={classes.detailbox} >
                  <PeopleIcon/>
                  <p style={{display:'inline',position:'relative',top:'3px'}}>{" "}{props.people}{" "}</p>
                  <AlarmIcon style={{position:'relative',marginLeft:'4px'}}/>
                  <p style={{display:'inline',top:'4px',position:'relative',marginLeft:'4px'}}>{" "}{props.time}{" "}hours</p>
                </div>
                <div className={classes.authorbox}>
                  <div className="row">

                    <div className="col-xl-2 col-lg-2" >
                      <div className={classes.Avatar} style={{maxHeight:'35px'}}>
                        <Avatar width='40px' height='40px' img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE5NC43MzcgMjkwLjM0N2gxMjQuMTM0djEyOC44NTJoLTEyNC4xMzR6IiBmaWxsPSIjZjlkN2FhIiBkYXRhLW9yaWdpbmFsPSIjZjlkN2FhIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTk0LjA4NCAyOTAuMzQ3djIxLjAwNnMyNC4zMTkgNTUuNTE3IDczLjM3MiA1NS41MTdjMjMuNTQzIDAgMzkuOTk4LTkuMjQ3IDUwLjc2Mi0xOC44NjN2LTU3LjY2eiIgZmlsbD0iI2U4YWM2YiIgZGF0YS1vcmlnaW5hbD0iI2U4YWM2YiIgc3R5bGU9IiI+PC9wYXRoPjwvZz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00NDguMzc5IDQ1NS4yODdjLTIuMzEtNTcuNTU4LTQ2LjYwMi03MC44NTItNzMuMTk3LTczLjYyNy0xMS41NC0xLjIwNC01OC41NTUtLjQyOC01OC41NTUtLjQyOC0xLjEyNiAxOS4yNjktMjQuMDI0IDM3LjcyMy01OS44MjQgMzguNDE1LTM1LjgtLjY5Mi02MS43NzktMjMuNDk4LTYxLjc3OS0zOC40MTUgMCAwLTQ1LjA2LS43NzYtNTYuNTk5LjQyOC0yNi41OTUgMi43NzUtNzAuODg3IDE2LjA2OS03My4xOTcgNzMuNjI3LTEuOTg4IDE0LjM1NCAwIDM0Ljg1OSAwIDM0Ljg1OXM2NC43MzQgMTkuODEzIDE4Ny4wODQgMjAuNDc0Yy45MTEuMDE0IDguMDcyLjAxNCA4Ljk4MyAwIDEyMi4zNS0uNjYxIDE4Ny4wODQtMjAuNDc0IDE4Ny4wODQtMjAuNDc0czEuOTg3LTIwLjUwNSAwLTM0Ljg1OXoiIGZpbGw9IiMxMjI3M2YiIGRhdGEtb3JpZ2luYWw9IiMxMjI3M2YiIHN0eWxlPSIiPjwvcGF0aD48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zMTYuNjI4IDM4MS4xOTdjLTEuMTI2IDE5LjI2OS0yNC4wMjMgMjkuNjA1LTU5LjgyNCAzMC4yOTctMzUuOC0uNjkyLTYxLjc3OS0xNS4zOC02MS43NzktMzAuMjk3IDAgMC01Ljc2LS4wOTktMTMuNjc1LS4xNzFsNTAuMzExIDEyOS4yNThjNi42OTMuMTU5IDEzLjU3MS4yNjQgMjAuNjUxLjMwMi45MTEuMDE0IDguMDcyLjAxNCA4Ljk4MyAwIDYuNjQyLS4wMzYgMTMuMTA0LS4xMzIgMTkuNDA2LS4yNzRsNTAuODc5LTEyOS4yOTJjLTguNTk5LjA3My0xNC45NTIuMTc3LTE0Ljk1Mi4xNzd6IiBmaWxsPSIjOGFjMWQ2IiBkYXRhLW9yaWdpbmFsPSIjOGFjMWQ2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2Y5ZDdhYSI+PHBhdGggZD0ibTM1OC44NzcgMjAwLjU4NyA4Ljc2Ny0yOC4wNDdzMTUuNDI2LTQuMjgyIDIzLjU2MiAxMi4zMTEtMTMuMTU0IDUwLjY4Ni0zMS41MTkgNTMuNTUxYy01LjA5Mi0xMi45NzktLjgxLTM3LjgxNS0uODEtMzcuODE1eiIgZmlsbD0iI2Y5ZDdhYSIgZGF0YS1vcmlnaW5hbD0iI2Y5ZDdhYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNTMuNzI0IDIwMC41ODctOC43NjctMjguMDQ3cy0xNS40MjYtNC4yODItMjMuNTYyIDEyLjMxMSAxMy4xNTQgNTAuNjg2IDMxLjUxOSA1My41NTFjNS4wOTItMTIuOTc5LjgxLTM3LjgxNS44MS0zNy44MTV6IiBmaWxsPSIjZjlkN2FhIiBkYXRhLW9yaWdpbmFsPSIjZjlkN2FhIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTM2Ny4wMyAyMDAuNjY0Yy4wMzktMS4xNzIuMDU5LTIuMzQzLjA1OS0zLjUxNSAwLTcyLjgzNiAyMS4yNTQtMTU1LjAxNC0xMDguMDQzLTE1Ni4yMjEtLjU5NC0uMDEyLTIuODg5LS4wMjgtMi44OTUtLjAyOHMtMi4zMDEuMDE3LTIuODk1LjAyOGMtMTI5LjI5NyAxLjIwNy0xMDguMDQzIDgzLjM4NS0xMDguMDQzIDE1Ni4yMjEgMCAxLjE3Mi4wMiAyLjM0NC4wNTkgMy41MTVzLS4xMyA1NC4yMDUgNy44NzggNjcuNzU2IDU1LjQzNyA3NS40ODMgMTAwLjQwMiA3NS40ODNjLjA0Mi0uMDQyIDUuMjM1LS4wNDQgNS4yNzkgMCA0NC45NjUgMCA5Mi4zOTUtNjEuOTMxIDEwMC40MDItNzUuNDgzIDguMDA4LTEzLjU1MSA3Ljg3Ny02Ny43NTYgNy44NzctNjcuNzU2eiIgZmlsbD0iI2Y5ZDdhYSIgZGF0YS1vcmlnaW5hbD0iI2Y5ZDdhYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYuNDc4IDQyNS4yMTQtMjAuMjg3IDIzLjE0OCAxMC4yMjUgNjIuMjM5aDIwLjEyM2wxMC4yMjYtNjIuMjM5eiIgZmlsbD0iIzA5MWUyNiIgZGF0YS1vcmlnaW5hbD0iIzA5MWUyNiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI3My45MDkgNDE1LjgwM2MwLTEwLjc4Ny0xMC4xNTEtMTQuNTA2LTE3LjQyNy0xNC41MmwtLjAwMS0uMDAxYy0uMDA3IDAtLjAxNC4wMDEtLjAyMS4wMDFzLS4wMTQtLjAwMS0uMDIxLS4wMDFsLS4wMDEuMDAxYy03LjI3Ni4wMTQtMTcuNDI3IDMuNzMzLTE3LjQyNyAxNC41MiAwIDkuNjUzIDkuNDM0IDE3Ljg4NyAxNS43MzUgMTkuNTQuNDM1LjIwMSAyLjk5My4yMDEgMy40MjcgMCA2LjMwMi0xLjY1MyAxNS43MzYtOS44ODcgMTUuNzM2LTE5LjU0eiIgZmlsbD0iIzA5MWUyNiIgZGF0YS1vcmlnaW5hbD0iIzA5MWUyNiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1Ni40NzggNDAxLjAyNSA2Mi4zOTMtNDEuNTQ3IDEzLjkwNCAxOS4yNTMtMzguMTQ5IDU0LjAwNHoiIGZpbGw9IiNiM2VkZmYiIGRhdGEtb3JpZ2luYWw9IiNiM2VkZmYiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYuNDc4IDQwMS4wMjUtNjEuNzQxLTQxLjU0Ny0xNC41NTYgMTkuMjUzIDM4LjE0OCA1NC4wMDR6IiBmaWxsPSIjYjNlZGZmIiBkYXRhLW9yaWdpbmFsPSIjYjNlZGZmIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTgwLjE4MSAzNzguNzMxLTE5LjkyMyAxLjQ1OHMxLjUgMjAuNjAzIDMuMDkxIDUzLjU2MmgyNS40NjZsLTE5Ljc0OSAxOS4zMzcgNDcuNTM5IDU2Ljc2IDE1LjUzLjUyOCAxNy43MDMuMTg1eiIgZmlsbD0iIzQ1NzM4ZCIgZGF0YS1vcmlnaW5hbD0iIzQ1NzM4ZCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMzMi43NzUgMzc4LjczMSAyMC40MjUgMS40NThzLTEuNSAyMC42MDMtMy4wOTEgNTMuNTYyYy0xNS44NTUgMC0yNS40NjYgMC0yNS40NjYgMGwxOS43NDkgMTkuMzM3LTQ3LjUzOSA1Ni43Ni0xNS40NjcuNDg1LTE3Ljc2Ni4yMjh6IiBmaWxsPSIjNDU3MzhkIiBkYXRhLW9yaWdpbmFsPSIjNDU3MzhkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTMyLjE5OSAxNzMuNzY5YzcuNzQ5LTEuNzE1IDE1LjI5LTEuNzUyIDIzLjIwOSAxMS44LjUyNy0yMC45NDMtMy4xNDgtMzYuOTU4IDQuODQ5LTQxLjg4NiA1LjUzNCA2LjE2IDUuNTM0IDEzLjU1MSA1LjUzNCAxMy41NTEgOS44NTUtMTYuMDE1IDI3LjAyLTI4LjMzNCAyOC4yOTMtNTYuNjY5IDguNjY1IDE2LjAxNSA0MC4wMzEgNjEuNTk3IDEyNC4xMzQgNTIuOTczLTcuMDYtOC42MjQtOS44MDktMTguNDc5LTkuODA5LTE4LjQ3OXMxNC42NTEgMTMuNTE3IDM3LjI0MyAxNi4wMTVjLTEuMjMyLTQuOTI4IDAtMTcuMjQ3IDAtMTcuMjQ3czE1LjEzIDEwLjk2OSAxNy45MTkgNTEuNzQxYzQuMDczLTEzLjAyOSA4LjM3My0xNS41MzYgMTQuMjMtMTIuNzQgMi45NjEtMTAuNjY2IDIzLjM1OS05Ni4yMDMtMTMuNjctMTMxLjkyOS0zOS4xMjUtMzcuNzQ5LTE0Ny44MzItNjUuODI2LTE5My40MTMgMC0yNC42MzggMi45OTgtNDkuOTM3IDIyLjUxNi0zOC41MTkgMTMyLjg3eiIgZmlsbD0iIzI0MDcwMyIgZGF0YS1vcmlnaW5hbD0iIzI0MDcwMyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="/>    
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9" style={{maxHeight:'35px'}}>
                      <p style={{marginLeft:'10px',top:'8px',position:'relative',textAlign:'left','text-overflow': 'ellipsis', overflow: 'hidden','white-space': 'nowrap'}}>{" "}{props.teacher}{" "}</p>
                    </div>
                  </div> 
                </div>
                
              </CardContent>
            </CardActionArea>
            
          </Card>
        </div>

  );
}
