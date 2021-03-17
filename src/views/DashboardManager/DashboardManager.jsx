import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import GaugeChart from 'react-gauge-chart'

import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CourseData from "../Course/CourseData/CourseData";
import CardBrief from "../Course/CourseCard/CardBrief";
import CardOnline from "../Course/CourseCard/CardOnline";
import GridList from '@material-ui/core/GridList';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector, useDispatch } from "react-redux";
import {logout} from '../../actions';
import { useHistory } from "react-router-dom";

import "./DashboardManager.css";


////ICON
import HistoryIcon from '@material-ui/icons/History';
import SchoolIcon from '@material-ui/icons/School';
import DescriptionIcon from '@material-ui/icons/Description';
import CommentIcon from '@material-ui/icons/Comment';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GroupIcon from '@material-ui/icons/Group';

import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCallout
} from '@coreui/react'

import {
  CChartLine,
  CChartDoughnut,
} from '@coreui/react-chartjs'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

//Calendar

const localizer = momentLocalizer(moment)

const currDate = new Date()
const currYear = currDate.getFullYear()
const currMonth = currDate.getMonth()

const events = [
  {
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(currYear, currMonth, 0),
    end: new Date(currYear, currMonth, 1),
  },
  {
    title: 'Long Event',
    start: new Date(currYear, currMonth, 7),
    end: new Date(currYear, currMonth, 10),
  },

  {
    title: 'DTS STARTS',
    start: new Date(currYear + 1, 2, 13, 0, 0, 0),
    end: new Date(currYear + 1, 2, 20, 0, 0, 0),
  },

  {
    title: 'DTS ENDS',
    start: new Date(currYear + 1, 10, 6, 0, 0, 0),
    end: new Date(currYear + 1, 10, 13, 0, 0, 0),
  },

  {
    title: 'Some Event',
    start: new Date(currYear, currMonth, 9, 0, 0, 0),
    end: new Date(currYear, currMonth, 9, 0, 0, 0),
  },
  {
    title: 'Conference',
    start: new Date(currYear, currMonth, 11),
    end: new Date(currYear, currMonth, 13),
    desc: 'Big conference for important people',
  },
  {
    title: 'Meeting',
    start: new Date(currYear, currMonth, 12, 10, 30, 0, 0),
    end: new Date(currYear, currMonth, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    title: 'Lunch',
    start: new Date(currYear, currMonth, 12, 12, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    title: 'Meeting',
    start: new Date(currYear, currMonth, 12, 14, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 15, 0, 0, 0),
  },
  {
    title: 'Happy Hour',
    start: new Date(currYear, currMonth, 12, 17, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    title: 'Dinner',
    start: new Date(currYear, currMonth, 12, 20, 0, 0, 0),
    end: new Date(currYear, currMonth, 12, 21, 0, 0, 0),
  },
  {
    title: 'Birthday Party',
    start: new Date(currYear, currMonth, 13, 7, 0, 0),
    end: new Date(currYear, currMonth, 13, 10, 30, 0),
  },
  {
    title: 'Birthday Party 2',
    start: new Date(currYear, currMonth, 13, 7, 0, 0),
    end: new Date(currYear, currMonth, 13, 10, 30, 0),
  },
  {
    title: 'Birthday Party 3',
    start: new Date(currYear, currMonth, 13, 7, 0, 0),
    end: new Date(currYear, currMonth, 13, 10, 30, 0),
  },
  {
    title: 'Late Night Event',
    start: new Date(currYear, currMonth, 17, 19, 30, 0),
    end: new Date(currYear, currMonth, 18, 2, 0, 0),
  },
  {
    title: 'Multi-day Event',
    start: new Date(currYear, currMonth, 20, 19, 30, 0),
    end: new Date(currYear, currMonth, 22, 2, 0, 0),
  },
]

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginLeft: '10px',
    backgroundColor: theme.palette.background.paper,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    'overflow-y': 'auto',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor:'#F5F5F5',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  gridList: {
    width: 520,
    height: 530,
  },
  // necessary for content to be below app bar
  toolbar: {
      height: '53px'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#333333',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ width: "50px", height: "50px", right: "-10px", top: '530px' }}
        onClick={onClick}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3My42NTQgNDczLjY1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBjeD0iMjM2LjgyNyIgY3k9IjIzNi44MjciIHI9IjIzNi44MjciIGZpbGw9IiM0YWJjOTYiIGRhdGEtb3JpZ2luYWw9IiM0YWJjOTYiIGNsYXNzPSIiPjwvY2lyY2xlPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0zNTguMDc1LDIxNi4wOTFjLTI3LjAxMS0yNy4wMTEtNTQuMDE4LTU0LjAyMi04MS4wMjktODEuMDMzICBjLTI1LjU2LTI1LjU2NC02NS4wOCwxNC4yNTktMzkuNDU2LDM5Ljg4M2MxMS4wMDksMTEuMDA5LDIyLjAxOSwyMi4wMTksMzMuMDI4LDMzLjAzMmMtNDMuMzUzLDAtODYuNzA2LDAtMTMwLjA1NSwwICBjLTM2LjIyNSwwLTM2LjU0Myw1Ni4xMDktMC40MDQsNTYuMTA5YzQzLjQ5MSwwLDg2Ljk4MiwwLDEzMC40NywwYy0xMS4wODQsMTEuMDg0LTIyLjE2OCwyMi4xNjgtMzMuMjUyLDMzLjI1MiAgYy0yNS41NjQsMjUuNTYsMTQuMjU5LDY1LjA4LDM5Ljg4MywzOS40NTZjMjcuMDExLTI3LjAwNyw1NC4wMTgtNTQuMDE0LDgxLjAyOS04MS4wMjUgIEMzNjkuMTMzLDI0NC45MTYsMzY4LjgzOCwyMjYuODUsMzU4LjA3NSwyMTYuMDkxeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{
          width: "50px",
          height: "50px",
          transform: "rotate(180deg)",
          left: "-10px",
          top: "505px"
        }}
        onClick={onClick}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3My42NTQgNDczLjY1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBjeD0iMjM2LjgyNyIgY3k9IjIzNi44MjciIHI9IjIzNi44MjciIGZpbGw9IiM0YWJjOTYiIGRhdGEtb3JpZ2luYWw9IiM0YWJjOTYiIGNsYXNzPSIiPjwvY2lyY2xlPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0zNTguMDc1LDIxNi4wOTFjLTI3LjAxMS0yNy4wMTEtNTQuMDE4LTU0LjAyMi04MS4wMjktODEuMDMzICBjLTI1LjU2LTI1LjU2NC02NS4wOCwxNC4yNTktMzkuNDU2LDM5Ljg4M2MxMS4wMDksMTEuMDA5LDIyLjAxOSwyMi4wMTksMzMuMDI4LDMzLjAzMmMtNDMuMzUzLDAtODYuNzA2LDAtMTMwLjA1NSwwICBjLTM2LjIyNSwwLTM2LjU0Myw1Ni4xMDktMC40MDQsNTYuMTA5YzQzLjQ5MSwwLDg2Ljk4MiwwLDEzMC40NywwYy0xMS4wODQsMTEuMDg0LTIyLjE2OCwyMi4xNjgtMzMuMjUyLDMzLjI1MiAgYy0yNS41NjQsMjUuNTYsMTQuMjU5LDY1LjA4LDM5Ljg4MywzOS40NTZjMjcuMDExLTI3LjAwNyw1NC4wMTgtNTQuMDE0LDgxLjAyOS04MS4wMjUgIEMzNjkuMTMzLDI0NC45MTYsMzY4LjgzOCwyMjYuODUsMzU4LjA3NSwyMTYuMDkxeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
     
      <List>   
          {/* <Divider /> */}
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><SchoolIcon className="icon-orange"/></ListItemIcon>
            <a className="nav-list">คอร์สเรียนทั้งหมด</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon>
                <img width="25px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTMwLjM5OSAzMTguNzk1aDI1MS4yMTdjNC43MTUgMCA4LjUzNS0zLjgyOSA4LjUzNS04LjUzNXYtMTgyLjkzM2wxOC43Mi0yNy42MDdjLjE0Ni0uMDIuMjk3LS4wMy40MzgtLjA2IDEuNzkxLS4zNDIgMy40MTItMS4yNTggNC42NC0yLjU3Mmg2NC40Nzl2MjYwLjIwOWgtNDQ0Ljg1NXYtMjYwLjIwOWg4OC4yOTJ2MjEzLjE3MmMwIDQuNzA2IDMuODI0IDguNTM1IDguNTM0IDguNTM1em0yNjMuMTA4LTIyNi44NC0xNS4xNjctMTAuMjgxLTUwLjI3MyA3NC4xMjEgMTUuMTY3IDEwLjI5NnptLTcuOTM2LTI1Ljk5MiAxOS44NjIgMTMuNDYxIDI5LjY2Ni00My43NDYtLjI1Ny0uMTcxaC0uMDFjMC0uMDEgMC0uMDEgMC0uMDFsLTE5LjU5Ni0xMy4yOHptNTQuNDI1LTQ3LjU4MiA3LjY1MS0xMS4yNjUtMTAuNTIzLTcuMTE0LTcuNjI2IDExLjI2MSAyLjY0NyAxLjc5NSA1LjIwMyAzLjUyOHptLTgwLjkyIDIyLjQ5MS0yOC44LTI4Ljh2MzQuMzcxaDI1LjAyNnptNDIuMDQtMjguMjMxLTEuMjE4LS44MjVjLS4xNzEtLjExNi0uNDQ4LS4wNjEtLjU2NC4xMTFsLTQyLjg0IDYzLjE2NWMtMS42NTEgMi40MzYtNC4zMjggMy43NDQtNy4wNyAzLjc0NC0xLjY0IDAtMy4zMDYtLjQ3OC00Ljc4MS0xLjQ2OS0zLjkwNS0yLjY0Ny00LjkxNy03Ljk1Ni0yLjI3LTExLjg1MWwxLjM1NC0yLjAwOGgtMjEuOTg2Yy00LjcxIDAtOC41My0zLjgyLTguNTMtOC41M3YtNTQuOTc4aC0xNzQuMjgydjMwMS43MjZoMjM0LjE1M3YtMTQ5LjIzOGwtMTYuOTQ5IDI1LjAwNmMuMDM1LjEzNi4wNzUuMjg3LjA5Ni40MjguNDM4IDIuMjI0LS4wNCA0LjUyOS0xLjMwOCA2LjM5NmwtMjcuNzIzIDQwLjg3N2MtMS4yNzMgMS44NzctMy4yMzYgMy4xNjUtNS40NTUgMy41OTNsLTI1LjA0NiA0LjgwMS00LjM3MyA2LjQ0MWMtMS42NTEgMi40NDYtNC4zMjggMy43NDQtNy4wNzEgMy43NDQtMS42NDEgMC0zLjMwNi0uNDY4LTQuNzc2LTEuNDY5LTMuOTA1LTIuNjM3LTQuOTE3LTcuOTUxLTIuMjc1LTExLjg1MWw0LjM3NC02LjQ0Ni00LjgxMS0yNS4wNDFjLS40MjMtMi4yMTkuMDU1LTQuNTI0IDEuMzIzLTYuMzkxbDI3LjcyMy00MC44NzdjMS40MDktMi4wODggMy41ODMtMy4zMzYgNS44OTgtMy42NThsNTIuNzM4LTc3Ljc2OWMtLjUzMi0yLjE1MS0uMjI4LTQuNTAxIDEuMDA1LTYuNTE2em0uMjIxIDQ3Ny43NDVoLTI5MC42NTRjLTUuOTYzIDAtMTAuODA0IDQuODU2LTEwLjgwNCAxMC44MDR2MTAuODFoMzEyLjI1NHYtMTAuODA5Yy0uMDAxLTUuOTQ4LTQuODQyLTEwLjgwNS0xMC43OTYtMTAuODA1em0tNjcuNjc5LTgyLjQ1M2gtMTU1LjMwNmMtMy4wNSAyMy4xNzktMTEuNTg0IDQ0LjQxLTI2LjM0NCA2NS4zODloMjA3Ljk5OWMtMTQuNzY0LTIwLjk4LTIzLjI5OS00Mi4yMTEtMjYuMzQ5LTY1LjM4OXptMTc4LjMzNC0zNDQuNDI1aC03NS4xNTdsLTExLjE4NyAxNi41MTZoNjEuMzMzYzQuNjggMCA4LjUwNSAzLjgxNSA4LjUwNSA4LjUzdjI3Ny4yNzljMCA0LjcxNS0zLjgyNCA4LjUzNS04LjUwNSA4LjUzNWgtNDYxLjkzOGMtNC43MDUgMC04LjUzNS0zLjgyLTguNTM1LTguNTM1di0yNzcuMjhjMC00LjcxNSAzLjgzLTguNTMgOC41MzUtOC41M2g5Ni44MjF2LTE2LjUxNWgtMTIxLjg1NnYzMjcuMzZoNTExLjk4NXYtMzI3LjM2em0tMzI5LjEwNiAxMjEuMDQ2Yy00LjcwNSAwLTguNTM1IDMuODItOC41MzUgOC41MzUgMCA0LjcxIDMuODMgOC41MyA4LjUzNSA4LjUzaDUzLjQwOGM0LjcwNSAwIDguNTM1LTMuODE5IDguNTM1LTguNTMgMC00LjcxNS0zLjgzLTguNTM1LTguNTM1LTguNTM1em0wIDg0LjM4MmgxMDUuMTNjNC43MTUgMCA4LjUzNS0zLjgxNSA4LjUzNS04LjUzcy0zLjgxOS04LjUzNS04LjUzNS04LjUzNWgtMTA1LjEzYy00LjcwNSAwLTguNTM1IDMuODE5LTguNTM1IDguNTM1IDAgNC43MTUgMy44MyA4LjUzIDguNTM1IDguNTN6bTAtMTM0LjYzNGgxMDUuMTNjNC43MTUgMCA4LjUzNS0zLjgyOSA4LjUzNS04LjUzIDAtNC43MTUtMy44MTktOC41MzUtOC41MzUtOC41MzVoLTEwNS4xM2MtNC43MDUgMC04LjUzNSAzLjgyLTguNTM1IDguNTM1IDAgNC43IDMuODMgOC41MyA4LjUzNSA4LjUzem0wLTY3LjMyN2gxMDUuMTNjNC43MTUgMCA4LjUzNS0zLjgxOSA4LjUzNS04LjUzNSAwLTQuNzEtMy44MTktOC41My04LjUzNS04LjUzaC0xMDUuMTNjLTQuNzA1IDAtOC41MzUgMy44MTktOC41MzUgOC41MyAwIDQuNzE1IDMuODMgOC41MzUgOC41MzUgOC41MzV6bTEzMi4xNjggMTQ1LjcyIDIwLjk1LTMwLjg5My0xOS44NjMtMTMuNDYxLTIwLjk0NCAzMC44NzggMy4yMDEgMTYuNjcyeiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmRmNWJmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
            </ListItemIcon>
            <a className="nav-list">เพิ่มหลักสูตร &nbsp; Online</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon>
                <img width="25px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDYzOS45OTg4IDYzOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDU1Ljc4OTA2MiAyOTMuNjM2NzE5YzAtNDMuOTUzMTI1IDM1Ljc4MTI1LTc5LjcxMDkzOCA3OS43NjU2MjYtNzkuNzEwOTM4IDEyLjEwMTU2MiAwIDIzLjU3NDIxOCAyLjcxODc1IDMzLjg1OTM3NCA3LjU1ODU5NHYtMjAyLjIzNDM3NWMwLTEwLjM1NTQ2OS04LjM5NDUzMS0xOC43NS0xOC43NS0xOC43NWgtNDYxLjMyODEyNGMtMTAuMzU1NDY5IDAtMTguNzUgOC4zOTQ1MzEtMTguNzUgMTguNzV2MjAyLjIzMDQ2OWMxMC4yODEyNS00LjgzOTg0NCAyMS43NTc4MTItNy41NTg1OTQgMzMuODU1NDY4LTcuNTU4NTk0IDQzLjk4NDM3NSAwIDc5Ljc2NTYyNSAzNS43NjE3MTkgNzkuNzY1NjI1IDc5LjcxNDg0NCAwIDcuMzkwNjI1LTEuMDI3MzQzIDE0LjUzMTI1LTIuOTE3OTY5IDIxLjMyNDIxOWg2MS44NjMyODJjLTEuODg2NzE5LTYuNzkyOTY5LTIuOTE3OTY5LTEzLjkzMzU5NC0yLjkxNzk2OS0yMS4zMjQyMTkgMC00My45NTMxMjUgMzUuNzgxMjUtNzkuNzE0ODQ0IDc5Ljc2NTYyNS03OS43MTQ4NDRzNzkuNzY1NjI1IDM1Ljc2MTcxOSA3OS43NjU2MjUgNzkuNzE0ODQ0YzAgNy4zOTA2MjUtMS4wMzEyNSAxNC41MzEyNS0yLjkyMTg3NSAyMS4zMjQyMTloNjEuODY3MTg4Yy0xLjg5MDYyNi02Ljc5Mjk2OS0yLjkyMTg3Ni0xMy45MzM1OTQtMi45MjE4NzYtMjEuMzI0MjE5em0tNTkuNDcyNjU2LTE4NS4xNDg0MzhjMCAxMC4zNTE1NjMtOC4zOTA2MjUgMTguNzUtMTguNzUgMTguNzVoLTExNS4xMzY3MThjLTEwLjM1NTQ2OSAwLTE4Ljc1LTguMzk4NDM3LTE4Ljc1LTE4Ljc1IDAtMTAuMzU1NDY5IDguMzk0NTMxLTE4Ljc1IDE4Ljc1LTE4Ljc1aDExNS4xMzY3MThjMTAuMzU5Mzc1IDAgMTguNzUgOC4zOTQ1MzEgMTguNzUgMTguNzV6bS0yMjYuNDk2MDk0IDg2LjI1Yy0xMC4zNTkzNzQgMC0xOC43NS04LjM5ODQzNy0xOC43NS0xOC43NSAwLTEwLjM1NTQ2OSA4LjM5MDYyNi0xOC43NSAxOC43NS0xOC43NWgzMDAuMzYzMjgyYzEwLjM1MTU2MiAwIDE4Ljc1IDguMzk0NTMxIDE4Ljc1IDE4Ljc1IDAgMTAuMzUxNTYzLTguMzk4NDM4IDE4Ljc1LTE4Ljc1IDE4Ljc1em0wIDAiIGZpbGw9IiNmZGY1YmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMDQuNDQxNDA2IDM3My4zNTU0NjljLTIwLjAyMzQzNyAwLTM4LjMyODEyNS03LjQyNTc4MS01Mi4zNTE1NjItMTkuNjQ4NDM4LTMwLjQ2ODc1IDEyLjAzOTA2My01Mi4wODk4NDQgNDEuNzQyMTg4LTUyLjA4OTg0NCA3Ni40Mjk2ODhsLjAwNzgxMjUgMTAuNDQ1MzEyYy4wMDc4MTI1IDQuOTY4NzUgMS45ODQzNzU1IDkuNzQyMTg4IDUuNTAzOTA2NSAxMy4yNTc4MTMgMy41MTk1MzEgMy41MDM5MDYgOC4yODEyNSA1LjQ3MjY1NiAxMy4yNDYwOTMgNS40NzI2NTZoLjAyNzM0NGwxNzEuMzc4OTA2LS4yMzQzNzVjNC45NzY1NjMtLjAwMzkwNiA5Ljc1MzkwNy0xLjk5NjA5NCAxMy4yNjE3MTktNS41MjM0MzcgMy41MTE3MTktMy41MzEyNSA1LjQ4MDQ2OS04LjMwODU5NCA1LjQ2MDkzOC0xMy4yODkwNjNsLS4wMzUxNTctMTAuMTQ0NTMxYzAtMzQuNjYwMTU2LTIxLjYwNTQ2OC02NC4zNTkzNzUtNTIuMDY2NDA2LTc2LjQwNjI1LTE0LjAyMzQzNyAxMi4yMTQ4NDQtMzIuMzI0MjE4IDE5LjY0MDYyNS01Mi4zNDM3NSAxOS42NDA2MjV6bTAgMCIgZmlsbD0iI2ZkZjViZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMyMCAzNzMuMzU1NDY5Yy0yMC4wMjM0MzggMC0zOC4zMzIwMzEtNy40MjU3ODEtNTIuMzU1NDY5LTE5LjY0ODQzOC0zMC40Njg3NSAxMi4wMzkwNjMtNTIuMDg5ODQzIDQxLjc0MjE4OC01Mi4wODk4NDMgNzYuNDI5Njg4bC4wMTE3MTggMTAuNDQ1MzEyYzAgNC45Njg3NSAxLjk4MDQ2OSA5Ljc0MjE4OCA1LjUwMzkwNiAxMy4yNTc4MTMgMy41MTk1MzIgMy41MDM5MDYgOC4yODEyNSA1LjQ3MjY1NiAxMy4yNDYwOTQgNS40NzI2NTZoLjAxNTYyNWwxNzEuMzg2NzE5LS4yMzQzNzVjNC45ODA0NjktLjAwMzkwNiA5Ljc1LTEuOTk2MDk0IDEzLjI2NTYyNS01LjUyMzQzNyAzLjUxMTcxOS0zLjUzMTI1IDUuNDcyNjU2LTguMzA4NTk0IDUuNDU3MDMxLTEzLjI4OTA2M2wtLjAzMTI1LTEwLjE0NDUzMWMwLTM0LjY2MDE1Ni0yMS42MTMyODEtNjQuMzU5Mzc1LTUyLjA2NjQwNi03Ni40MDYyNS0xNC4wMjM0MzggMTIuMjE0ODQ0LTMyLjMyNDIxOSAxOS42NDA2MjUtNTIuMzQzNzUgMTkuNjQwNjI1em0wIDAiIGZpbGw9IiNmZGY1YmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im02MzkuOTY0ODQ0IDQzMC4xMjEwOTRjMC0zNC42NjAxNTYtMjEuNjEzMjgyLTY0LjM1OTM3NS01Mi4wNjY0MDYtNzYuNDA2MjUtMTQuMDE5NTMyIDEyLjIxODc1LTMyLjMyNDIxOSAxOS42NDA2MjUtNTIuMzQzNzUgMTkuNjQwNjI1LTIwLjAyMzQzOCAwLTM4LjMyODEyNi03LjQyNTc4MS01Mi4zNTE1NjMtMTkuNjQ4NDM4LTMwLjQ2ODc1IDEyLjAzOTA2My01Mi4wODk4NDQgNDEuNzQ2MDk0LTUyLjA4OTg0NCA3Ni40Mjk2ODhsLjAwNzgxMyAxMC40NDUzMTJjLjAwNzgxMiA0Ljk3NjU2MyAxLjk4NDM3NSA5Ljc0MjE4OCA1LjUwNzgxMiAxMy4yNTc4MTMgMy41MTU2MjUgMy41MDM5MDYgOC4yNzczNDQgNS40NzY1NjIgMTMuMjQyMTg4IDUuNDc2NTYyaC4wMjczNDRsMTcxLjM3ODkwNi0uMjM4MjgxYzQuOTgwNDY4LS4wMDM5MDYgOS43NS0xLjk5NjA5NCAxMy4yNjE3MTgtNS41MjM0MzcgMy41MTU2MjYtMy41MzEyNSA1LjQ4MDQ2OS04LjMwODU5NCA1LjQ2MDkzOC0xMy4yODkwNjN6bTAgMCIgZmlsbD0iI2ZkZjViZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM2Mi41NjY0MDYgMjkzLjYzNjcxOWMwIDIzLjUxMTcxOS0xOS4wNTQ2ODcgNDIuNTcwMzEyLTQyLjU2NjQwNiA0Mi41NzAzMTJzLTQyLjU3MDMxMi0xOS4wNTg1OTMtNDIuNTcwMzEyLTQyLjU3MDMxMmMwLTIzLjUwNzgxMyAxOS4wNTg1OTMtNDIuNTY2NDA3IDQyLjU3MDMxMi00Mi41NjY0MDdzNDIuNTY2NDA2IDE5LjA1ODU5NCA0Mi41NjY0MDYgNDIuNTY2NDA3em0wIDAiIGZpbGw9IiNmZGY1YmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im01NzcuNTQ2ODc1IDI5My42MzY3MTljMCAyMy41MTE3MTktMTkuMDU4NTk0IDQyLjU3MDMxMi00Mi41NjI1IDQyLjU3MDMxMi0yMy41MTE3MTkgMC00Mi41NzAzMTMtMTkuMDU4NTkzLTQyLjU3MDMxMy00Mi41NzAzMTIgMC0yMy41MDc4MTMgMTkuMDU4NTk0LTQyLjU2NjQwNyA0Mi41NzAzMTMtNDIuNTY2NDA3IDIzLjUwMzkwNiAwIDQyLjU2MjUgMTkuMDU4NTk0IDQyLjU2MjUgNDIuNTY2NDA3em0wIDAiIGZpbGw9IiNmZGY1YmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNDcuMDExNzE5IDI5My42MzY3MTljMCAyMy41MTE3MTktMTkuMDU4NTk0IDQyLjU3MDMxMi00Mi41NzAzMTMgNDIuNTcwMzEyLTIzLjUwNzgxMiAwLTQyLjU2NjQwNi0xOS4wNTg1OTMtNDIuNTY2NDA2LTQyLjU3MDMxMiAwLTIzLjUwNzgxMyAxOS4wNTg1OTQtNDIuNTY2NDA3IDQyLjU2NjQwNi00Mi41NjY0MDcgMjMuNTExNzE5IDAgNDIuNTcwMzEzIDE5LjA1ODU5NCA0Mi41NzAzMTMgNDIuNTY2NDA3em0wIDAiIGZpbGw9IiNmZGY1YmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
            </ListItemIcon>
            <a className="nav-list">เพิ่มหลักสูตร Classroom</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><DescriptionIcon className="icon-orange"/> </ListItemIcon>
            <a className="nav-list" >ขออนุญาติอบรมนอกหลักสูตร</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><HistoryIcon className="icon-orange"/> </ListItemIcon>
            <a className="nav-list" >ประวัติการเรียน</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon>
                <img width="25px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDkzNyA5MzciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTUxMy4xLDM2MC44NWM1LjYwMSwwLDExLDAuOSwxNi4yLDIuNGw5Ny0xMTguOWM2LjItNy42LDE3LjctOSwyNS4yLTIuNmM3LjMsNi4xLDguMywxNywyLjIsMjQuNGwtOTUuOSwxMTcuNiAgIGM2LjUsOSwxMC40LDIwLjEwMSwxMC40LDMyLjEwMWMwLDIyLjMtMTMuNCw0MS42LTMyLjUsNTAuMTk5SDkxMmMxMy44LDAsMjUtMTEuMTk5LDI1LTI1di0zMTYuNWMwLTEzLjgtMTEuMi0yNS0yNS0yNUg0MzQgICBjLTEzLjgsMC0yNSwxMS4yLTI1LDI1djIwNy44bDIyLjYsMjguNmg4MS41VjM2MC44NXoiIGZpbGw9IiNlZWM2Y2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTxjaXJjbGUgY3g9IjIwMS4zIiBjeT0iMTIxLjg1IiByPSIxMDIuNCIgZmlsbD0iI2VlYzZjYSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+Cgk8Zz4KCQk8cGF0aCBkPSJNMzA2LjMsODkyLjU1YzAsMTMuODAxLTExLjIsMjUtMjUsMjVoLTQyYy0xMy44LDAtMjUtMTEuMTk5LTI1LTI1di0yMDkuNmMwLTcuNC02LTEzLjQtMTMuNC0xMy40bDAsMCAgICBjLTcuNCwwLTEzLjQsNi0xMy40LDEzLjR2MjA4LjZjMCwxNC4zMDEtMTEuNywyNi0yNiwyNmgtNDEuMWMtMTMuOCwwLTI1LTExLjE5OS0yNS0yNWwtMC4yLTUwNmMwLTYuOC01LjUtMTIuMzk5LTEyLjQtMTIuMzk5bDAsMCAgICBjLTYuOCwwLTEyLjQsNS41LTEyLjQsMTIuMzk5VjU4MS4xNWMwLDEzLjgtMTEuMiwyNS0yNSwyNUgyNWMtMTMuOCwwLTI1LTExLjItMjUtMjV2LTI2Ni44YzAtMzEuNywyNS43LTU3LjMsNTcuMy01Ny4zSDI4NSAgICBjMjQuMzk5LDAsNDcuNSwxMS4yLDYyLjcsMzAuM2w2MS4xOTksNzcuMmwxMi45LDE2LjNjMCwwLDU4LDAsOTEuNCwwLjFjMTMuOCwwLDI1LDExLjIsMjUsMjV2MTkuOWMwLDEzLjgtMTEuMiwyNS0yNSwyNUg0MDUgICAgYy0xMC43LDAtMjAuOC00LjktMjcuNC0xMy4zMDFsLTQ1LjYtNTguNmMtMi4zLTMtNi00LjgtOS44LTQuOEgzMTkuMWMtNi44LDAtMTIuMzk5LDUuNS0xMi4zOTksMTIuMzk5TDMwNi4zLDg5Mi41NXoiIGZpbGw9IiNlZWM2Y2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" />
            </ListItemIcon>
            <a className="nav-list">ผู้สอน</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon>
                <img width="25px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIyNiAyMzJjLTYzLjk2MyAwLTExNi01Mi4wMzctMTE2LTExNnM1Mi4wMzctMTE2IDExNi0xMTYgMTE2IDUyLjAzNyAxMTYgMTE2LTUyLjAzNyAxMTYtMTE2IDExNnoiIGZpbGw9IiNlZWM2Y2EiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48Zz48Zz48cGF0aCBkPSJtMjcxIDMxN2MwLTI1LjY4IDcuMjEtNDkuNzA3IDE5LjcwOC03MC4xNjctMTkuNTE1IDkuNjkzLTQxLjQ4IDE1LjE2Ny02NC43MDggMTUuMTY3LTMwLjEyOCAwLTU4LjE1Mi05LjE3NC04MS40MjktMjQuODc0LTI4Ljc4MiAxMS4xNTctNTUuMTg2IDI4LjI5MS03Ny42NjkgNTAuNzc0LTQyLjQ5OCA0Mi40OTctNjUuOTAyIDk4Ljk5OS02NS45MDIgMTU5LjA5OXY1MC4wMDFjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWg0MjBjOC4yODQgMCAxNS02LjcxNiAxNS0xNXYtNTAuMDAxYzAtLjkwMS0uMDI1LTEuODA1LS4wMzYtMi43MDgtMTQuMDcyIDQuOTg2LTI5LjIwNSA3LjcwOS00NC45NjQgNy43MDktNzQuNDM5IDAtMTM1LTYwLjU2MS0xMzUtMTM1eiIgZmlsbD0iI2VlYzZjYSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48cGF0aCBkPSJtNDA2IDIxMmMtNTcuODk3IDAtMTA1IDQ3LjEwMy0xMDUgMTA1czQ3LjEwMyAxMDUgMTA1IDEwNSAxMDUtNDcuMTAzIDEwNS0xMDUtNDcuMTAzLTEwNS0xMDUtMTA1em0zMCAxMjBoLTE1djE1YzAgOC4yODQtNi43MTYgMTUtMTUgMTVzLTE1LTYuNzE2LTE1LTE1di0xNWgtMTVjLTguMjg0IDAtMTUtNi43MTYtMTUtMTVzNi43MTYtMTUgMTUtMTVoMTV2LTE1YzAtOC4yODQgNi43MTYtMTUgMTUtMTVzMTUgNi43MTYgMTUgMTV2MTVoMTVjOC4yODQgMCAxNSA2LjcxNiAxNSAxNXMtNi43MTYgMTUtMTUgMTV6IiBmaWxsPSIjZWVjNmNhIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+" />
            </ListItemIcon>
            <a className="nav-list" >เพิ่มผู้สอน</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><CommentIcon className="icon-blue"/> </ListItemIcon>
            <a className="nav-list" >Dialogue</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><AccessibilityIcon className="icon-blue"/> </ListItemIcon>
            <a className="nav-list" >My Individual Development Plan</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><DateRangeIcon className="icon-blue"/> </ListItemIcon>
            <a className="nav-list" >My Annual Development Plan</a>
          </ListItem>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><GroupIcon className="icon-blue"/> </ListItemIcon>
            <a className="nav-list" >My Team</a>
          </ListItem>
          <ListItem>
            <button onClick={handleLogout} className="logout-dashboard">
              <span style={{ display: 'inline', color: 'white', marginLeft: '5px', fontWeight: '100' }}><h5 style={{ display: 'inline', fontWeight: '500', color: 'white' }}>Log Out</h5></span>
            </button>
          </ListItem>
         
      </List>
      
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  }

  return (
    <div className={classes.layout}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <span style={{ zIndex: '1' }}>
            <h1 className="Head">
              Dashboard
            </h1>
          </span>
          
        </Toolbar>
        
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div style={{ "font-family": "Kanit, sans-serif" }}>
                <WidgetsDropdown />
                <CRow>
                    <CCol xl="6">
                        <CCard style={{ minHeight: '95%' }}>
                            <CCardBody>
                                <CRow>
                                    <CCol xs="12" md="12" xl="12">
                                        <CRow>
                                            <CCol sm="12">
                                                <CCallout color="warning">
                                                    <strong className="h4">อบรมภายใน VS อบรมภายนอก</strong>
                                                </CCallout>
                                            </CCol>
                                        </CRow>

                                        <CChartDoughnut
                                            datasets={[
                                                {
                                                    backgroundColor: [
                                                        '#41B883',
                                                        '#E46651',
                                                    ],
                                                    data: [40, 20]
                                                }
                                            ]}
                                            labels={['อบรมภายใน', 'อบรมภายนอก']}
                                            options={{
                                                tooltips: {
                                                    enabled: true
                                                }
                                            }}
                                        />
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xl="6">
                        <CCard style={{ minHeight: '95%' }}>
                            <CCardBody>
                                <CRow>
                                    <CCol xs="12" md="12" xl="12">
                                        <CRow>
                                            <CCol sm="12">
                                                <CCallout color="warning">
                                                    <strong className="h4">ในแผน VS นอกแผน</strong>
                                                </CCallout>
                                            </CCol>
                                        </CRow>

                                        <CChartDoughnut
                                            datasets={[
                                                {
                                                    backgroundColor: [
                                                        '#41B883',
                                                        '#E46651',
                                                    ],
                                                    data: [40, 20]
                                                }
                                            ]}
                                            labels={['ในแผน', 'นอกแผน']}
                                            options={{
                                                tooltips: {
                                                    enabled: true
                                                }
                                            }}
                                        />
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol xl="12">
                        <CCard style={{ minHeight: '95%' }}>
                            <CCardBody>
                                <CCallout color="warning">
                                    <strong className="h4">ค่าใช้จ่าย</strong>
                                </CCallout>
                            </CCardBody>

                            <CCardBody style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <CChartLine
                                    style={{ height: "300px" }}
                                    datasets={[
                                        {
                                            label: 'Data One',
                                            backgroundColor: 'rgb(228,102,81,0.9)',
                                            data: [30, 39, 10, 50, 30, 70, 35]
                                        },
                                        {
                                            label: 'Data Two',
                                            backgroundColor: 'rgb(0,216,255,0.9)',
                                            data: [39, 80, 40, 35, 40, 20, 45]
                                        }
                                    ]}
                                    options={{
                                        tooltips: {
                                            enabled: true
                                        },
                                        maintainAspectRatio: false
                                    }}
                                    labels="months"
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol xl="6">
                        <CCard style={{ minHeight: '95%' }}>
                            <CCardBody>
                                <CRow>
                                    <CCol xs="12" md="12" xl="12">
                                        <CRow>
                                            <CCol sm="12">
                                                <CCallout color="warning">
                                                    <strong className="h4">หลักสูตรไตรมาส</strong>
                                                </CCallout>
                                            </CCol>
                                        </CRow>

                                        <div className={classes.root}>
                                            <GridList cellHeight={300} className={classes.gridList} >
                                                {
                                                    CourseData.filter(id => id.courseType === "online" && id.hot === "true").map(courseItem => (
                                                        
                                                        <CardBrief
                                                            key={courseItem.id}
                                                            coursename={courseItem.title}
                                                            category1={courseItem.category1}
                                                            category2={courseItem.category2}
                                                            people={courseItem.people}
                                                            time={courseItem.time}
                                                            rating={courseItem.rating}
                                                            teacher={courseItem.teacher}
                                                            img={courseItem.img}
                                                            hot={courseItem.hot}
                                                        />

                                                    ))
                                                }
                                            </GridList>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xl="6">
                        <CCard style={{ maxHeight: '95%' }}>
                            <CCardBody style={{ height: '40rem' }}>
                                <BigCalendar
                                    className="c-d-sm-down-none"
                                    events={events}
                                    views={['month', 'week', 'day']}
                                    defaultDate={new Date(currYear, currMonth, 1)}
                                    localizer={localizer}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol xl="6">
                        <CCard style={{ maxHeight: '95%' }}>
                            <CCardBody>
                                <CCallout color="warning">
                                    <strong className="h4">Mandatory Success</strong>
                                </CCallout>
                            </CCardBody>
                            <CCardBody >
                                <GaugeChart id="gauge-chart5"
                                    nrOfLevels={420}
                                    arcsLength={[0.3, 0.5, 0.2]}
                                    colors={['#5BE12C', '#F5CD19', '#EA4228']}
                                    percent={0.37}
                                    arcPadding={0.02}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol xl="6">
                        <CCard style={{ maxHeight: '95%' }}>
                            <CCardBody>
                                <CCallout color="warning">
                                    <strong className="h4">IDPs Success</strong>
                                </CCallout>
                            </CCardBody>
                            <CCardBody >
                                <GaugeChart id="gauge-chart5"
                                    nrOfLevels={420}
                                    arcsLength={[0.3, 0.5, 0.2]}
                                    colors={['#5BE12C', '#F5CD19', '#EA4228']}
                                    percent={0.37}
                                    arcPadding={0.02}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>


                    <CCol xl="12">
                        <CCard style={{ minHeight: '95%' }}>
                            <CCardBody>
                                <CCallout color="warning">
                                    <strong className="h4">Trend การอบรม</strong>
                                </CCallout>
                            </CCardBody>

                            <CCardBody style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <CChartLine
                                    style={{ height: "300px" }}
                                    datasets={[
                                        {
                                            label: 'Data One',
                                            backgroundColor: 'rgb(228,102,81,0.9)',
                                            data: [30, 39, 10, 50, 30, 70, 35]
                                        },
                                        {
                                            label: 'Data Two',
                                            backgroundColor: 'rgb(0,216,255,0.9)',
                                            data: [39, 80, 40, 35, 40, 20, 45]
                                        }
                                    ]}
                                    options={{
                                        tooltips: {
                                            enabled: true
                                        },
                                        maintainAspectRatio: false
                                    }}
                                    labels="months"
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </div>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
