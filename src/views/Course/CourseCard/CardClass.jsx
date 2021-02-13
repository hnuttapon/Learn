import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "../CourseCard/Component/rating";
import DateRangeIcon from '@material-ui/icons/DateRange';
import RoomIcon from '@material-ui/icons/Room';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: 300,
    'z-index': 3,
    borderRadius:'10px',
  },
  media: {
    height: 160,
    'z-index': 1,
  },
  badge:{
    position:'relative',
    float:'left',
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
    display:'inline',
    height:'25px',
    margin: '0px 0px 0px 0',
  },top:{
    marginTop:'30px',
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
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://image.freepik.com/free-vector/gradient-geometric-background_52683-54352.jpg"
                title="Contemplative Reptile"
              />
              <CardContent style={{minHeight:'293px'}}>
                <p variant="h5" component="h2" style={{display:'block', textAlign:'left',fontSize:'20px',marginBottom:'5px',color:'black',fontWeight:'700'}}>
                  {props.coursename}  ({props.season}) {Hot()} {New()}
                </p>
                <Rating rating={props.rating}></Rating>
                <p style={{display:'inline',fontWeight:'550',fontSize:'17px',float:'left',marginLeft:'10px'}}>{props.rating}{" "}</p>

                <div style={{marginBottom:'7px',marginTop:'32px', display:'block',position:'absolute'}}>
                  <p className={classes.chip} >{props.category1}</p>
                  <p className={classes.chip} style={{marginLeft:'7px'}}>{props.category2}</p>
                </div>

                <Divider style={{marginTop:'75px',backgroundColor:'white'}}/>

                <div style={{backgroundColor:'#0B7189',padding:'5px',paddingTop:'10px',color:'white',borderRadius:'10px',width:'100%','box-shadow': '20px 20px #BCD8B7'}}>
                  <DateRangeIcon className={classes.badge}/>
                  <p style={{display:'block',textAlign:'left',marginLeft:'40px'}}>{" "}{props.duration}{" "}</p>
                  <RoomIcon className={classes.badge}/>
                  <p style={{display:'block',textAlign:'left',marginLeft:'40px','text-overflow': 'ellipsis', overflow: 'hidden','white-space': 'nowrap'}}>{" "}{props.place}{" "}</p>
                </div>
                
              </CardContent>
              
            </CardActionArea>
            
          </Card>
          
        </div>

  );
}
