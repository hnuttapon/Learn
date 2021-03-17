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
import { logout } from '../../actions';
import { useHistory } from "react-router-dom";

import "./DashboardUser.css";


////ICON
import HistoryIcon from '@material-ui/icons/History';
import SchoolIcon from '@material-ui/icons/School';
import DescriptionIcon from '@material-ui/icons/Description';
import CommentIcon from '@material-ui/icons/Comment';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import DateRangeIcon from '@material-ui/icons/DateRange';

import {
  CCard,
  CCardBody,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'

import {
  CChartLine,
  CChartDoughnut,
  CChartRadar,
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
    marginLeft: '15px',
    backgroundColor: theme.palette.background.paper,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#F5F5F5',
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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#333333',
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
        <a href="/#/AllCourse" style={{ textDecoration: 'none' }}>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><SchoolIcon className="icon-orange" /></ListItemIcon>
            <a className="nav-list">คอร์สเรียนทั้งหมด</a>
          </ListItem>
        </a>
        <a href="/#/Teacher" style={{ textDecoration: 'none' }}>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon>
              <img width="25px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTEzNSwwYy0yNC44MTQsMC00NSwyMC4xODYtNDUsNDVjMCwyNC44MTQsMjAuMTg2LDQ1LDQ1LDQ1YzI0LjgxNCwwLDQ1LTIwLjE4Niw0NS00NUMxODAsMjAuMTg2LDE1OS44MTQsMCwxMzUsMHoiIGZpbGw9IiNmZGY1YmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ2NywwSDI1NWMtMjQuODE0LDAtNDUsMjAuMTg2LTQ1LDQ1djUzLjMwMmM0LjQ0MiwyLjU4Nyw4LjY4OCw1LjU0MywxMi40MjIsOS4yNzZsMjkuNDE0LDI5LjQxNGwyMS4zMjgtMTAuNjY0ICAgIGMxNC4yOTktNy4xMjUsMjYuNzMzLTcuNDI5LDM5LjcyNS00LjU4M2w3MS45ODQtMzUuOTkzYzIyLjE4OS0xMC45OTIsNDkuMTA1LTIuMzQ2LDYwLjM1MiwyMC4wODMgICAgYzExLjIwOCwyMi4zODYsMi4xMTMsNDkuMzE5LTIwLjA5OCw2MC40MjVsLTY4Ljk4NSwzNC40OTJjLTUuMjk3LDE0LjM2MS0xNS41NiwyNi4wNjEtMjkuMzM1LDMyLjkzNUwzMTQuMTgsMjQwSDQ2NyAgICBjMjQuODE0LDAsNDUtMjAuMTg2LDQ1LTQ1VjQ1QzUxMiwyMC4xODYsNDkxLjgxNCwwLDQ2NywweiIgZmlsbD0iI2ZkZjViZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDE4LjQxOCwxMTkuMjkyYy0zLjcyMS03LjQxMi0xMi43LTEwLjM4Ni0yMC4xMjctNi43MDlsLTgzLjY1Miw0MS44MjVjLTguMzI5LTQuNzc1LTE4LjU3NC01Ljk2Ny0yOC4wNTctMS4yNDMgICAgbC00MC42NjQsMjAuMzMybC00NC43MDctNDQuNzA3QzE5NS41NDIsMTIzLjEyLDE4OC4wMTMsMTIwLDE4MCwxMjBINjBjLTMzLjA5MSwwLTYwLDI2LjkwOS02MCw2MHY5MSAgICBjMCwyMC42NzgsMjAuNjAzLDM1LjE5Nyw0MC4wMDUsMjguMjg2TDYwLDI5Mi4yMjZjMCw2Ni4yMjYsMCwxMjMuMjcxLDAsMTg5Ljc3NGMwLDE2LjU2NywxMy40MzEsMzAsMzAsMzAgICAgYzE2LjU2OSwwLDMwLTEzLjQzMywzMC0zMGMwLTM5LjUwMywwLTY4LjU3LDAtMTA2YzAtOC4yODYsNi43MTYtMTUsMTUtMTVzMTUsNi43MTQsMTUsMTVjMCwzOC42NDMsMCw2Ni4zNTYsMCwxMDYgICAgYzAsMTYuNTY3LDEzLjQzMSwzMCwzMCwzMGMxNi41NjksMCwzMC0xMy40MzMsMzAtMzBjMC05Mi4zNjgsMC0xNTkuMzIxLDAtMjUwLjkyMWwxOS45OTUsNy4wNDYgICAgYzguMzYxLDIuOTU5LDE2LjI1MiwyLjI4MywyMy40MjMtMS4yODlsNjAtMzBjMTAuMzc1LTUuMTc2LDE2LjA0Ny0xNS41NzcsMTYuMjMtMjYuMzg3bDgyLjA2MS00MS4wMyAgICBDNDE5LjEyMSwxMzUuNzEzLDQyMi4xMjQsMTI2LjcwNCw0MTguNDE4LDExOS4yOTJ6IiBmaWxsPSIjZmRmNWJmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
            </ListItemIcon>
            <a className="nav-list">ผู้สอน</a>
          </ListItem>
        </a>
        <a href="/#/CoursePermission" style={{ textDecoration: 'none' }}>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><DescriptionIcon className="icon-orange" /> </ListItemIcon>
            <a className="nav-list" >ขออนุญาติอบรมนอกหลักสูตร</a>
          </ListItem>
        </a>
        <a href="/#/MyHistory" style={{ textDecoration: 'none' }}>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><HistoryIcon className="icon-orange" /> </ListItemIcon>
            <a className="nav-list" >ประวัติการเรียน</a>
          </ListItem>
        </a>
        <a href="/#/Dialogue/User" style={{ textDecoration: 'none' }}>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><CommentIcon className="icon-blue" /> </ListItemIcon>
            <a className="nav-list" >Dialogue</a>
          </ListItem>
        </a>
        <a href="/#/IDP" style={{ textDecoration: 'none' }}>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><AccessibilityIcon className="icon-blue" /> </ListItemIcon>
            <a className="nav-list" >My Individual Development Plan</a>
          </ListItem>
        </a>
        <a href="/#/AnnualCourse" style={{ textDecoration: 'none' }}>
          <ListItem className="nav-link-dashboard" >
            <ListItemIcon><DateRangeIcon className="icon-blue" /> </ListItemIcon>
            <a className="nav-list" >My Annual Development Plan</a>
          </ListItem>
        </a>
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

                      <CCallout color="warning" className="mb-4">
                        <strong className="h4">Overall</strong>
                      </CCallout>

                      <div className="progress-group  mb-4">
                        <div className="progress-group-header">
                          <span style={{ marginRight: "10px" }}><img width="30px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxwYXRoIGQ9Im01NCAyNi45NnYyOS4wNGMwIDEuMS0uOSAyLTIgMmgtMjBjMCAxLjEtLjQ1IDIuMS0xLjE3IDIuODMtLjczLjcyLTEuNzMgMS4xNy0yLjgzIDEuMTdzLTIuMS0uNDUtMi44My0xLjE3Yy0uNzItLjczLTEuMTctMS43My0xLjE3LTIuODNoLTIwYy0xLjEgMC0yLS45LTItMnYtMzRoNHYzMmgyMiAyMnYtMjAtNGgxbC42NS0yLjU3Yy42NC0uMiAxLjI1LS40NyAxLjg0LS43N3oiIGZpbGw9IiNmZjgyNmUiIGRhdGEtb3JpZ2luYWw9IiNmZjgyNmUiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0ibTQ1IDMwLS42NS0yLjU3Yy0uNjQtLjItMS4yNS0uNDctMS44NC0uNzdsLTIuMjkgMS4zNi00LjI0LTQuMjQgMS4zNi0yLjI5Yy0uMy0uNTktLjU3LTEuMi0uNzctMS44NGwtMi41Ny0uNjV2LTNoLTJjLTIuMjEgMC00IDEuNzktNCA0IDAtMi4yMS0xLjc5LTQtNC00aC00YzAgMS4xLS45IDItMiAyaC0ydjIuNTljMCAuNzgtLjYzIDEuNDEtMS40MSAxLjQxLS4zOCAwLS43NC0uMTUtMS0uNDFsLTMuNTktMy41OWgtNHY0IDMyaDIyIDIydi0yMC00eiIgZmlsbD0iI2U2ZTllZCIgZGF0YS1vcmlnaW5hbD0iI2U2ZTllZCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJtMzIgMzhoMTR2OGgtMTR6IiBmaWxsPSIjNGZjMWU5IiBkYXRhLW9yaWdpbmFsPSIjNGZjMWU5IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im0yIDE2di04YzAtMS4xLjktMiAyLTJoMTRjMS4xIDAgMiAuOSAyIDJ2OGMwIDEuMS0uOSAyLTIgMmgtMnYyLjU5YzAgLjc4LS42MyAxLjQxLTEuNDEgMS40MS0uMzggMC0uNzQtLjE1LTEtLjQxbC0zLjU5LTMuNTloLTQtMmMtMS4xIDAtMi0uOS0yLTJ6IiBmaWxsPSIjZmZlYWE3IiBkYXRhLW9yaWdpbmFsPSIjZmZlYWE3IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im0yNCA0M3YzaC0xNHYtM2MwLTMuODcgMy4xMy03IDctNyAxLjk0IDAgMy42OC43OCA0Ljk1IDIuMDVzMi4wNSAzLjAxIDIuMDUgNC45NXoiIGZpbGw9IiNiNGRkN2YiIGRhdGEtb3JpZ2luYWw9IiNiNGRkN2YiIHN0eWxlPSIiPjwvcGF0aD48L2c+PGc+PGNpcmNsZSBjeD0iMTciIGN5PSIzMiIgZmlsbD0iI2YwZDBiNCIgcj0iNCIgZGF0YS1vcmlnaW5hbD0iI2YwZDBiNCIgc3R5bGU9IiI+PC9jaXJjbGU+PC9nPjxnPjxwYXRoIGQ9Im0zNCAxNnYtM2wyLjU3LS42NWMuMi0uNjQuNDctMS4yNS43Ny0xLjg0bC0xLjM2LTIuMjkgNC4yNC00LjI0IDIuMjkgMS4zNmMuNTktLjMgMS4yLS41NyAxLjg0LS43N2wuNjUtMi41N2g2bC42NSAyLjU3Yy42NC4yIDEuMjUuNDcgMS44NC43N2wyLjI5LTEuMzYgNC4yNCA0LjI0LTEuMzYgMi4yOWMuMy41OS41NyAxLjIuNzcgMS44NGwyLjU3LjY1djZsLTIuNTcuNjVjLS4yLjY0LS40NyAxLjI1LS43NyAxLjg0bDEuMzYgMi4yOS00LjI0IDQuMjQtMS43OC0xLjA2LS41MS0uM2MtLjU5LjMtMS4yLjU3LTEuODQuNzdsLS42NSAyLjU3aC0xLTVsLS42NS0yLjU3Yy0uNjQtLjItMS4yNS0uNDctMS44NC0uNzdsLTIuMjkgMS4zNi00LjI0LTQuMjQgMS4zNi0yLjI5Yy0uMy0uNTktLjU3LTEuMi0uNzctMS44NGwtMi41Ny0uNjV6bTIyIDBjMC00LjQyLTMuNTgtOC04LThzLTggMy41OC04IDggMy41OCA4IDggOCA4LTMuNTggOC04eiIgZmlsbD0iI2ZmYzcyOSIgZGF0YS1vcmlnaW5hbD0iI2ZmYzcyOSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJtNDggOGM0LjQyIDAgOCAzLjU4IDggOHMtMy41OCA4LTggOC04LTMuNTgtOC04IDMuNTgtOCA4LTh6bTQgOGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6IiBmaWxsPSIjZmNkNzcwIiBkYXRhLW9yaWdpbmFsPSIjZmNkNzcwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48Zz48cGF0aCBkPSJtNjMgMTkuNzc3di03LjU1NWwtMi44MDItLjcxM2MtLjExOS0uMzE4LS4yNTItLjYzOS0uNC0uOTU2bDEuNDgtMi40ODktNS4zNDItNS4zNDItMi40ODkgMS40NzljLS4zMTctLjE0Ny0uNjM3LS4yODEtLjk1Ni0uNGwtLjcxNC0yLjgwMWgtNy41NTVsLS43MTIgMi44MDJjLS4zMTkuMTE5LS42MzkuMjUzLS45NTYuNGwtMi40ODktMS40NzktNS4zNDIgNS4zNDIgMS40OCAyLjQ4OWMtLjE0Ny4zMTctLjI4MS42MzgtLjQuOTU2bC0yLjgwMy43MTN2Mi43NzdoLTFjLTEuNjQxIDAtMy4wODguODA2LTQgMi4wMzEtLjkxMi0xLjIyNS0yLjM1OS0yLjAzMS00LTIuMDMxaC0zdi03YzAtMS42NTQtMS4zNDYtMy0zLTNoLTE0Yy0xLjY1NCAwLTMgMS4zNDYtMyAzdjhjMCAxLjY1NCAxLjM0NiAzIDMgM2gxdjJoLTR2MzVjMCAxLjY1NCAxLjM0NiAzIDMgM2gxOS4xMDFjLjQ2NCAyLjI3OSAyLjQ4NSA0IDQuODk5IDRzNC40MzUtMS43MjEgNC44OTktNGgxOS4xMDFjMS42NTQgMCAzLTEuMzQ2IDMtM3YtMjcuMjc5bC45MzYuNTU2IDUuMzQyLTUuMzQyLTEuNDgtMi40ODljLjE0Ny0uMzE3LjI4MS0uNjM4LjQtLjk1NnptLTMxLTIuNzc3aDF2Mi43NzdsMi44MDIuNzEzYy4xMTkuMzE4LjI1Mi42MzkuNC45NTZsLTEuNDggMi40ODkgNS4zNDIgNS4zNDIgMi40ODktMS40NzljLjMxNy4xNDcuNjM3LjI4MS45NTYuNGwuNzE0IDIuODAyaDQuNzc3djIyaC0yMHYtMzNjMC0xLjY1NCAxLjM0Ni0zIDMtM3ptLTI5LTF2LThjMC0uNTUyLjQ0OS0xIDEtMWgxNGMuNTUxIDAgMSAuNDQ4IDEgMXY4YzAgLjU1Mi0uNDQ5IDEtMSAxaC0zdjMuNTg2YzAgLjMzNy0uNDY4LjUzMS0uNzA3LjI5M2wtMy44NzktMy44NzloLTYuNDE0Yy0uNTUxIDAtMS0uNDQ4LTEtMXptNi41ODYgMyAzLjI5MyAzLjI5NGMuNDUuNDQ4IDEuMDcyLjcwNiAxLjcwNy43MDYgMS4zMzEgMCAyLjQxNC0xLjA4MyAyLjQxNC0yLjQxNHYtMS41ODZoMWMxLjMwMiAwIDIuNDAyLS44MzkgMi44MTYtMmgzLjE4NGMxLjY1NCAwIDMgMS4zNDYgMyAzdjMzaC0yMHYtMzR6bTQyLjQxNCAzOGgtMjF2MWMwIDEuNjU0LTEuMzQ2IDMtMyAzcy0zLTEuMzQ2LTMtM3YtMWgtMjFjLS41NTEgMC0xLS40NDgtMS0xdi0zM2gydjMyaDIyIDIgMjJ2LTI0aC43NzdsLjcxMy0yLjgwMmMuMTctLjA2NC4zNC0uMTQyLjUxLS4yMTR2MjguMDE2YzAgLjU1Mi0uNDQ5IDEtMSAxem02Ljc2NC0zMy4zNzktMy4xNDMgMy4xNDMtMi4wOTYtMS4yNDYtLjQ5My4yNTZjLS41NTguMjg4LTEuMTI0LjUyNS0xLjY4My43MDRsLS41MjguMTY4LS41OTggMi4zNTRoLTQuNDQ1bC0uNTk5LTIuMzU0LS41MjgtLjE2OGMtLjU1OS0uMTc5LTEuMTI1LS40MTYtMS42ODMtLjcwNGwtLjQ5My0uMjU2LTIuMDk2IDEuMjQ2LTMuMTQzLTMuMTQzIDEuMjQ2LTIuMDk1LS4yNTQtLjQ5MmMtLjI4OS0uNTYtLjUyNS0xLjEyNi0uNzA0LTEuNjg2bC0uMTY5LS41MjgtMi4zNTUtLjU5N3YtNC40NDVsMi4zNTQtLjU5OC4xNjktLjUyOGMuMTc5LS41Ni40MTUtMS4xMjYuNzA0LTEuNjg2bC4yNTQtLjQ5Mi0xLjI0Ni0yLjA5NSAzLjE0My0zLjE0MyAyLjA5NiAxLjI0Ni40OTMtLjI1NmMuNTU4LS4yODggMS4xMjQtLjUyNSAxLjY4My0uNzA0bC41MjgtLjE2OC41OTktMi4zNTRoNC40NDVsLjU5OSAyLjM1NC41MjguMTY4Yy41NTkuMTc5IDEuMTI1LjQxNiAxLjY4My43MDRsLjQ5My4yNTYgMi4wOTYtMS4yNDYgMy4xNDMgMy4xNDMtMS4yNDYgMi4wOTUuMjU0LjQ5MmMuMjg5LjU2LjUyNSAxLjEyNi43MDQgMS42ODZsLjE2OS41MjggMi4zNTUuNTk3djQuNDQ1bC0yLjM1NC41OTgtLjE2OS41MjhjLS4xNzkuNTYtLjQxNSAxLjEyNi0uNzA0IDEuNjg2bC0uMjU0LjQ5MnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDggN2MtNC45NjIgMC05IDQuMDM3LTkgOXM0LjAzOCA5IDkgOSA5LTQuMDM3IDktOS00LjAzOC05LTktOXptMCAxNmMtMy44NiAwLTctMy4xNDEtNy03czMuMTQtNyA3LTcgNyAzLjE0MSA3IDctMy4xNCA3LTcgN3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDggMTFjLTIuNzU3IDAtNSAyLjI0My01IDVzMi4yNDMgNSA1IDUgNS0yLjI0MyA1LTUtMi4yNDMtNS01LTV6bTAgOGMtMS42NTQgMC0zLTEuMzQ2LTMtM3MxLjM0Ni0zIDMtMyAzIDEuMzQ2IDMgMy0xLjM0NiAzLTMgM3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjUgNDNjMC0zLjIzMi0xLjkzLTYuMDE2LTQuNjk1LTcuMjc3IDEuMDMxLS45MTcgMS42OTUtMi4yMzggMS42OTUtMy43MjMgMC0yLjc1Ny0yLjI0My01LTUtNXMtNSAyLjI0My01IDVjMCAxLjQ4NS42NjQgMi44MDYgMS42OTUgMy43MjMtMi43NjUgMS4yNjEtNC42OTUgNC4wNDUtNC42OTUgNy4yNzd2NGgxNnptLTExLTExYzAtMS42NTQgMS4zNDYtMyAzLTNzMyAxLjM0NiAzIDMtMS4zNDYgMy0zIDMtMy0xLjM0Ni0zLTN6bTkgMTNoLTEydi0yYzAtMy4zMDkgMi42OTEtNiA2LTZzNiAyLjY5MSA2IDZ6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTUgOWgxMnYyaC0xMnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNSAxM2g4djJoLTh6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE1IDEzaDJ2MmgtMnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDcgMzdoLTE2djEwaDE2em0tMiA4aC0xMnYtNmgxMnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzEgMzNoMnYyaC0yeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNSAzM2gxMnYyaC0xMnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzEgMjloNnYyaC02eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMSAxOWg0djJoLTR6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE5IDIzaDZ2MmgtNnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDUgNDloMnYyaC0yeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMSA0OWgxMnYyaC0xMnoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjMgNDloMnYyaC0yeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im05IDQ5aDEydjJoLTEyeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" /></span>
                          <span className="title">Mandatory Complete</span>
                          <span className="ml-auto font-weight-bold">67% </span>
                        </div>
                        <div className="progress-group-bars">
                          <CProgress className="progress-xs" color="success" value="56" />
                        </div>
                      </div>

                      <div className="progress-group mb-4">
                        <div className="progress-group-header">
                          <span style={{ marginRight: "10px" }}><img width="30px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGlkPSJNb25pdG9yIj48cGF0aCBkPSJtMzM5LjYwOCAzOTQuN2MyLjM5MSAzMC44NDUgMTUuMDQgNTUuODc1IDM0LjYwMiA3OS4yMTFsMS40MjEgMS42OTVoLTIzOS4yNjJsMS40MjEtMS42OTVjMTkuNTYyLTIzLjMzNiAzMi4yMTItNDguMzY1IDM0LjYwMi03OS4yMTFsLjA3NC0uOTUyaDE2Ny4wNjh6IiBmaWxsPSIjOTBhNGFlIiBkYXRhLW9yaWdpbmFsPSIjOTBhNGFlIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTMzMi4wNjcgNDc1LjYwNmgtMTk1LjY5OGwxLjQyMS0xLjY5NWM2LjEzNS03LjMxOSAxMS41OS0xNC44MDQgMTYuMjYyLTIyLjU4M2gxMzcuOTc4YzE3LjMyNSAwIDMyLjQ1MyA5Ljg3OCA0MC4wMzcgMjQuMjc4eiIgZmlsbD0iI2M0Y2NjZiIgZGF0YS1vcmlnaW5hbD0iI2M0Y2NjZiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0tLjAwMSA2MS40NjVoNTEyLjAwMnYzMzMuMzE1aC01MTIuMDAyeiIgZmlsbD0iIzU0NmU3YSIgZGF0YS1vcmlnaW5hbD0iIzU0NmU3YSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im00NDcuMDI0IDYxLjQ2NWg2NC45Nzd2MzMzLjMxNWgtNjQuOTc3eiIgZmlsbD0iIzM1NTA1YyIgZGF0YS1vcmlnaW5hbD0iIzM1NTA1YyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMi40ODkgOTMuOTUyaDQ0Ny4wMjR2MjY4LjMzOGgtNDQ3LjAyNHoiIGZpbGw9IiM4ZWJmZTgiIGRhdGEtb3JpZ2luYWw9IiM4ZWJmZTgiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNDQ3LjAyNCA5My45NTJoMzIuNDg4djI2OC4zMzhoLTMyLjQ4OHoiIGZpbGw9IiM1MTlhZDYiIGRhdGEtb3JpZ2luYWw9IiM1MTlhZDYiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMTE1LjM2IDQ3NC41NzRoMjgxLjI4YzEwLjI5MyAwIDE4LjcxMiA4LjQyIDE4LjcxMiAxOC43MTJ2MTguNzE0aC0zMTguNzA0di0xOC43MTRjMC0xMC4yOTIgOC40MTktMTguNzEyIDE4LjcxMi0xOC43MTJ6IiBmaWxsPSIjZWNlZmYxIiBkYXRhLW9yaWdpbmFsPSIjZWNlZmYxIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM3MC4yMjMgNDkzLjI4NnYxOC43MTRoNDUuMTI5di0xOC43MTRjMC0xMC4yOTItOC40Mi0xOC43MTItMTguNzEyLTE4LjcxMmgtMjEuODc1LTIwLjYwNWMxLjgzNiAwIDMuNjAzLjM2NCA1LjI0OSAxLjAzMiA2LjI3OCAyLjU0OCAxMC44MTQgOS41MjcgMTAuODE0IDE3LjY4eiIgZmlsbD0iI2M0Y2NjZiIgZGF0YS1vcmlnaW5hbD0iI2M0Y2NjZiIgc3R5bGU9IiI+PC9wYXRoPjwvZz48ZyBpZD0iUGFwZXIiPjxwYXRoIGQ9Im0xMzQuNDQyIDBoMTg1LjE3Nmw1Ny45NDIgNTcuOTQxdjI1MC41NjloLTI0My4xMTh6IiBmaWxsPSIjZWNlZmYxIiBkYXRhLW9yaWdpbmFsPSIjZWNlZmYxIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM1NS44NjQgMzYuMjQ2IDIxLjY5NiAyMS42OTZ2MjUwLjU2OGgtMjEuNjk2eiIgZmlsbD0iI2M0Y2NjZiIgZGF0YS1vcmlnaW5hbD0iI2M0Y2NjZiIgc3R5bGU9IiI+PC9wYXRoPjxnIGZpbGw9IiM5MGE0YWUiPjxwYXRoIGQ9Im0zNzcuNTYgNTcuOTQyLTU3Ljk0Mi01Ny45NDJ2NTcuOTQyeiIgZmlsbD0iIzkwYTRhZSIgZGF0YS1vcmlnaW5hbD0iIzkwYTRhZSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xODUuMjQyIDIwMy4zNzNjLTQuNTYxIDAtOC4yNTgtMy42OTctOC4yNTgtOC4yNThzMy42OTgtOC4yNTggOC4yNTgtOC4yNThoNTEuNjc3YzQuNTYgMCA4LjI1OCAzLjY5NyA4LjI1OCA4LjI1OHMtMy42OTggOC4yNTgtOC4yNTggOC4yNTh6IiBmaWxsPSIjOTBhNGFlIiBkYXRhLW9yaWdpbmFsPSIjOTBhNGFlIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE4NS4yNDEgMjY4LjUyMmMtNC41NjEgMC04LjI1OC0zLjY5Ny04LjI1OC04LjI1OHMzLjY5Ny04LjI1OCA4LjI1OC04LjI1OGgxMDEuNzM4YzQuNTYxIDAgOC4yNTggMy42OTcgOC4yNTggOC4yNThzLTMuNjk4IDguMjU4LTguMjU4IDguMjU4eiIgZmlsbD0iIzkwYTRhZSIgZGF0YS1vcmlnaW5hbD0iIzkwYTRhZSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xODUuMjQxIDEzOC4yMjRjLTQuNTYxIDAtOC4yNTgtMy42OTctOC4yNTgtOC4yNThzMy42OTctOC4yNTggOC4yNTgtOC4yNThoMTAxLjczOGM0LjU2MSAwIDguMjU4IDMuNjk4IDguMjU4IDguMjU4cy0zLjY5OCA4LjI1OC04LjI1OCA4LjI1OHoiIGZpbGw9IiM5MGE0YWUiIGRhdGEtb3JpZ2luYWw9IiM5MGE0YWUiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMTg1LjI0MSA3My4wNzJjLTQuNTYxIDAtOC4yNTgtMy42OTctOC4yNTgtOC4yNThzMy42OTctOC4yNTggOC4yNTgtOC4yNThoMTAxLjczOGM0LjU2MSAwIDguMjU4IDMuNjk3IDguMjU4IDguMjU4cy0zLjY5OCA4LjI1OC04LjI1OCA4LjI1OHoiIGZpbGw9IiM5MGE0YWUiIGRhdGEtb3JpZ2luYWw9IiM5MGE0YWUiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjxnIGlkPSJCYWxscG9pbnQiPjxwYXRoIGQ9Im00MjcuNzI1IDQuMjk5LTEzLjI0OCAxOS41NjcgMTguNzE0IDEyLjY5MSAxMy4yNDctMTkuNTY2YzIuMDAzLTIuOTU5IDEuMjI3LTcuMDE2LTEuNzI5LTkuMDIxbC03Ljk2NC01LjRjLTIuOTU2LTIuMDA2LTcuMDE4LTEuMjI4LTkuMDIgMS43Mjl6IiBmaWxsPSIjNTQ2ZTdhIiBkYXRhLW9yaWdpbmFsPSIjNTQ2ZTdhIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQwOC41NDMgMTguNjYtNS43MzQgOC40NTYtNS43NjQtMy44NDNjLS43ODgtLjUzNC0xLjczOS0uNjk1LTIuNjM3LS41MjMtLjg5NC4xNzItMS43MTYuNjcyLTIuMjUgMS40NTlsLTQxLjQ1MSA2MS4xMjZjLTEuNTkyIDIuMzQ5LTQuNzg4IDIuOTYzLTcuMTM3IDEuMzcxcy0yLjk2My00Ljc4OC0xLjM3MS03LjEzN2w0MS40NTEtNjEuMTI2YzIuMTQyLTMuMTU3IDUuMzYtNS4xNDkgOC44MjItNS44MTMgMy40NTktLjY2MyA3LjE4My0uMDA0IDEwLjMzOSAyLjEzNnoiIGZpbGw9IiM1NDZlN2EiIGRhdGEtb3JpZ2luYWw9IiM1NDZlN2EiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNDAxLjExNCA5NC4xOTctMjguMzUtMTkuMjI2Yy0xOS42OTYgMjkuMDM2LTM5LjM4NSA1OC4wNzctNTkuMDc3IDg3LjExNmwyOC4zNSAxOS4yMjZjMTkuNjkyLTI5LjAzOCAzOS4zODEtNTguMDggNTkuMDc3LTg3LjExNnoiIGZpbGw9IiM4YmMzNGEiIGRhdGEtb3JpZ2luYWw9IiM4YmMzNGEiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzcxLjUxNiAzNy41NjloNjcuNjY0djM5LjczN2gtNjcuNjY0eiIgZmlsbD0iI2YwNDE3YiIgdHJhbnNmb3JtPSJtYXRyaXgoLjU2MSAtLjgyOCAuODI4IC41NjEgMTMwLjMwNSAzNjAuNjgzKSIgZGF0YS1vcmlnaW5hbD0iI2YwNDE3YiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yODUuMTcxIDE5OS4yNTIgMjYuODI2LTM5LjU1NyAzMi44ODggMjIuMzAyLTI2LjgyNiAzOS41NTgtMjcuNTk1IDUuMjkzeiIgZmlsbD0iI2YwNDE3YiIgZGF0YS1vcmlnaW5hbD0iI2YwNDE3YiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yOTcuNjAxIDIyNS40NzktOS4wMzIgMTMuMzE5Yy0xLjU5MiAyLjM0OS00Ljc4OCAyLjk2My03LjEzNyAxLjM3MXMtMi45NjMtNC43ODgtMS4zNzEtNy4xMzdsOS4wMzQtMTMuMzIyeiIgZmlsbD0iIzU0NmU3YSIgZGF0YS1vcmlnaW5hbD0iIzU0NmU3YSIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" /></span>
                          <span className="title">IDDS Complete</span>
                          <span className="ml-auto font-weight-bold">31%</span>
                        </div>
                        <div className="progress-group-bars">
                          <CProgress className="progress-xs" color="primary" value="15" />
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-header">
                          <span style={{ marginRight: "10px" }}><img width="30px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGlkPSJNb25pdG9yIj48cGF0aCBkPSJtMzM5LjYwOCAzOTQuN2MyLjM5MSAzMC44NDUgMTUuMDQgNTUuODc1IDM0LjYwMiA3OS4yMTFsMS40MjEgMS42OTVoLTIzOS4yNjJsMS40MjEtMS42OTVjMTkuNTYyLTIzLjMzNiAzMi4yMTItNDguMzY1IDM0LjYwMi03OS4yMTFsLjA3NC0uOTUyaDE2Ny4wNjh6IiBmaWxsPSIjOTBhNGFlIiBkYXRhLW9yaWdpbmFsPSIjOTBhNGFlIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTMzMi4wNjcgNDc1LjYwNmgtMTk1LjY5OGwxLjQyMS0xLjY5NWM2LjEzNS03LjMxOSAxMS41OS0xNC44MDQgMTYuMjYyLTIyLjU4M2gxMzcuOTc4YzE3LjMyNSAwIDMyLjQ1MyA5Ljg3OCA0MC4wMzcgMjQuMjc4eiIgZmlsbD0iI2M0Y2NjZiIgZGF0YS1vcmlnaW5hbD0iI2M0Y2NjZiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0tLjAwMSA2MS40NjVoNTEyLjAwMnYzMzMuMzE1aC01MTIuMDAyeiIgZmlsbD0iIzU0NmU3YSIgZGF0YS1vcmlnaW5hbD0iIzU0NmU3YSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im00NDcuMDI0IDYxLjQ2NWg2NC45Nzd2MzMzLjMxNWgtNjQuOTc3eiIgZmlsbD0iIzM1NTA1YyIgZGF0YS1vcmlnaW5hbD0iIzM1NTA1YyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMi40ODkgOTMuOTUyaDQ0Ny4wMjR2MjY4LjMzOGgtNDQ3LjAyNHoiIGZpbGw9IiM4ZWJmZTgiIGRhdGEtb3JpZ2luYWw9IiM4ZWJmZTgiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNDQ3LjAyNCA5My45NTJoMzIuNDg4djI2OC4zMzhoLTMyLjQ4OHoiIGZpbGw9IiM1MTlhZDYiIGRhdGEtb3JpZ2luYWw9IiM1MTlhZDYiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMTE1LjM2IDQ3NC41NzRoMjgxLjI4YzEwLjI5MyAwIDE4LjcxMiA4LjQyIDE4LjcxMiAxOC43MTJ2MTguNzE0aC0zMTguNzA0di0xOC43MTRjMC0xMC4yOTIgOC40MTktMTguNzEyIDE4LjcxMi0xOC43MTJ6IiBmaWxsPSIjZWNlZmYxIiBkYXRhLW9yaWdpbmFsPSIjZWNlZmYxIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM3MC4yMjMgNDkzLjI4NnYxOC43MTRoNDUuMTI5di0xOC43MTRjMC0xMC4yOTItOC40Mi0xOC43MTItMTguNzEyLTE4LjcxMmgtMjEuODc1LTIwLjYwNWMxLjgzNiAwIDMuNjAzLjM2NCA1LjI0OSAxLjAzMiA2LjI3OCAyLjU0OCAxMC44MTQgOS41MjcgMTAuODE0IDE3LjY4eiIgZmlsbD0iI2M0Y2NjZiIgZGF0YS1vcmlnaW5hbD0iI2M0Y2NjZiIgc3R5bGU9IiI+PC9wYXRoPjwvZz48ZyBpZD0iUGFwZXIiPjxwYXRoIGQ9Im0xMzQuNDQyIDBoMTg1LjE3Nmw1Ny45NDIgNTcuOTQxdjI1MC41NjloLTI0My4xMTh6IiBmaWxsPSIjZWNlZmYxIiBkYXRhLW9yaWdpbmFsPSIjZWNlZmYxIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM1NS44NjQgMzYuMjQ2IDIxLjY5NiAyMS42OTZ2MjUwLjU2OGgtMjEuNjk2eiIgZmlsbD0iI2M0Y2NjZiIgZGF0YS1vcmlnaW5hbD0iI2M0Y2NjZiIgc3R5bGU9IiI+PC9wYXRoPjxnIGZpbGw9IiM5MGE0YWUiPjxwYXRoIGQ9Im0zNzcuNTYgNTcuOTQyLTU3Ljk0Mi01Ny45NDJ2NTcuOTQyeiIgZmlsbD0iIzkwYTRhZSIgZGF0YS1vcmlnaW5hbD0iIzkwYTRhZSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xODUuMjQyIDIwMy4zNzNjLTQuNTYxIDAtOC4yNTgtMy42OTctOC4yNTgtOC4yNThzMy42OTgtOC4yNTggOC4yNTgtOC4yNThoNTEuNjc3YzQuNTYgMCA4LjI1OCAzLjY5NyA4LjI1OCA4LjI1OHMtMy42OTggOC4yNTgtOC4yNTggOC4yNTh6IiBmaWxsPSIjOTBhNGFlIiBkYXRhLW9yaWdpbmFsPSIjOTBhNGFlIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE4NS4yNDEgMjY4LjUyMmMtNC41NjEgMC04LjI1OC0zLjY5Ny04LjI1OC04LjI1OHMzLjY5Ny04LjI1OCA4LjI1OC04LjI1OGgxMDEuNzM4YzQuNTYxIDAgOC4yNTggMy42OTcgOC4yNTggOC4yNThzLTMuNjk4IDguMjU4LTguMjU4IDguMjU4eiIgZmlsbD0iIzkwYTRhZSIgZGF0YS1vcmlnaW5hbD0iIzkwYTRhZSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xODUuMjQxIDEzOC4yMjRjLTQuNTYxIDAtOC4yNTgtMy42OTctOC4yNTgtOC4yNThzMy42OTctOC4yNTggOC4yNTgtOC4yNThoMTAxLjczOGM0LjU2MSAwIDguMjU4IDMuNjk4IDguMjU4IDguMjU4cy0zLjY5OCA4LjI1OC04LjI1OCA4LjI1OHoiIGZpbGw9IiM5MGE0YWUiIGRhdGEtb3JpZ2luYWw9IiM5MGE0YWUiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMTg1LjI0MSA3My4wNzJjLTQuNTYxIDAtOC4yNTgtMy42OTctOC4yNTgtOC4yNThzMy42OTctOC4yNTggOC4yNTgtOC4yNThoMTAxLjczOGM0LjU2MSAwIDguMjU4IDMuNjk3IDguMjU4IDguMjU4cy0zLjY5OCA4LjI1OC04LjI1OCA4LjI1OHoiIGZpbGw9IiM5MGE0YWUiIGRhdGEtb3JpZ2luYWw9IiM5MGE0YWUiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjxnIGlkPSJCYWxscG9pbnQiPjxwYXRoIGQ9Im00MjcuNzI1IDQuMjk5LTEzLjI0OCAxOS41NjcgMTguNzE0IDEyLjY5MSAxMy4yNDctMTkuNTY2YzIuMDAzLTIuOTU5IDEuMjI3LTcuMDE2LTEuNzI5LTkuMDIxbC03Ljk2NC01LjRjLTIuOTU2LTIuMDA2LTcuMDE4LTEuMjI4LTkuMDIgMS43Mjl6IiBmaWxsPSIjNTQ2ZTdhIiBkYXRhLW9yaWdpbmFsPSIjNTQ2ZTdhIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQwOC41NDMgMTguNjYtNS43MzQgOC40NTYtNS43NjQtMy44NDNjLS43ODgtLjUzNC0xLjczOS0uNjk1LTIuNjM3LS41MjMtLjg5NC4xNzItMS43MTYuNjcyLTIuMjUgMS40NTlsLTQxLjQ1MSA2MS4xMjZjLTEuNTkyIDIuMzQ5LTQuNzg4IDIuOTYzLTcuMTM3IDEuMzcxcy0yLjk2My00Ljc4OC0xLjM3MS03LjEzN2w0MS40NTEtNjEuMTI2YzIuMTQyLTMuMTU3IDUuMzYtNS4xNDkgOC44MjItNS44MTMgMy40NTktLjY2MyA3LjE4My0uMDA0IDEwLjMzOSAyLjEzNnoiIGZpbGw9IiM1NDZlN2EiIGRhdGEtb3JpZ2luYWw9IiM1NDZlN2EiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNDAxLjExNCA5NC4xOTctMjguMzUtMTkuMjI2Yy0xOS42OTYgMjkuMDM2LTM5LjM4NSA1OC4wNzctNTkuMDc3IDg3LjExNmwyOC4zNSAxOS4yMjZjMTkuNjkyLTI5LjAzOCAzOS4zODEtNTguMDggNTkuMDc3LTg3LjExNnoiIGZpbGw9IiM4YmMzNGEiIGRhdGEtb3JpZ2luYWw9IiM4YmMzNGEiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzcxLjUxNiAzNy41NjloNjcuNjY0djM5LjczN2gtNjcuNjY0eiIgZmlsbD0iI2YwNDE3YiIgdHJhbnNmb3JtPSJtYXRyaXgoLjU2MSAtLjgyOCAuODI4IC41NjEgMTMwLjMwNSAzNjAuNjgzKSIgZGF0YS1vcmlnaW5hbD0iI2YwNDE3YiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yODUuMTcxIDE5OS4yNTIgMjYuODI2LTM5LjU1NyAzMi44ODggMjIuMzAyLTI2LjgyNiAzOS41NTgtMjcuNTk1IDUuMjkzeiIgZmlsbD0iI2YwNDE3YiIgZGF0YS1vcmlnaW5hbD0iI2YwNDE3YiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yOTcuNjAxIDIyNS40NzktOS4wMzIgMTMuMzE5Yy0xLjU5MiAyLjM0OS00Ljc4OCAyLjk2My03LjEzNyAxLjM3MXMtMi45NjMtNC43ODgtMS4zNzEtNy4xMzdsOS4wMzQtMTMuMzIyeiIgZmlsbD0iIzU0NmU3YSIgZGF0YS1vcmlnaW5hbD0iIzU0NmU3YSIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" /></span>
                          <span className="title">E-Learning Hours</span>
                          <span className="ml-auto font-weight-bold">56 </span>
                        </div>
                        <div className="progress-group-bars">
                          <CProgress className="progress-xs" color="danger" value="11" />
                        </div>
                      </div>
                      <div className="progress-group mb-4">
                        <div className="progress-group-header">
                          <span style={{ marginRight: "10px" }}><img width="30px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTI0NC4xNTMsMTkyLjI0N1Y0My4wNjljMC04Ljg5Myw3LjIwOS0xNi4xMDIsMTYuMTAyLTE2LjEwMmgyMTIuNTM5ICBjOC44OTMsMCwxNi4xMDIsNy4yMDksMTYuMTAyLDE2LjEwMnYxNDkuMTc4YzAsOC44OTMtNy4yMDksMTYuMTAyLTE2LjEwMiwxNi4xMDJIMjYwLjI1NiAgQzI1MS4zNjIsMjA4LjM0OSwyNDQuMTUzLDIwMS4xNCwyNDQuMTUzLDE5Mi4yNDd6IiBmaWxsPSIjNDY3MzhjIiBkYXRhLW9yaWdpbmFsPSIjNDY3MzhjIiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTI1Ni41OTEsMTU0LjQxNGMtMi4zNjYsMC00LjcwOC0xLjA0NC02LjI4Ni0zLjA0NmMtMi43MzQtMy40NjktMi4xNC04LjQ5OCwxLjMyOS0xMS4yMzMgIGw2NS41Ni01MS42OTRjMy40Ny0yLjczNSw4LjQ5OS0yLjE0LDExLjIzMywxLjMyOWMyLjczNCwzLjQ2OSwyLjE0LDguNDk4LTEuMzI5LDExLjIzM2wtNjUuNTYsNTEuNjk0ICBDMjYwLjA2OSwxNTMuODUyLDI1OC4zMjQsMTU0LjQxNCwyNTYuNTkxLDE1NC40MTR6IiBmaWxsPSIjZmY4YzQ2IiBkYXRhLW9yaWdpbmFsPSIjZmY4YzQ2Ij48L3BhdGg+CjxjaXJjbGUgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBjeD0iMTI4LjI4OSIgY3k9IjM2LjM0MiIgcj0iMzQuODM4IiBmaWxsPSIjZmZiNjllIiBkYXRhLW9yaWdpbmFsPSIjZmZiNjllIiBjbGFzcz0iIj48L2NpcmNsZT4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNMTUyLjQ0LDQyNi44OGMtMTEuMTk4LDAtMjAuMjc1LTkuMDc4LTIwLjI3NS0yMC4yNzVWMjQ0LjU0NGMwLTExLjE5OCw5LjA3OC0yMC4yNzUsMjAuMjc1LTIwLjI3NSAgczIwLjI3NSw5LjA3OCwyMC4yNzUsMjAuMjc1djE2Mi4wNjFDMTcyLjcxNiw0MTcuODAyLDE2My42MzgsNDI2Ljg4LDE1Mi40NCw0MjYuODh6IiBmaWxsPSIjMzQzZTZiIiBkYXRhLW9yaWdpbmFsPSIjMzQzZTZiIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTEwMy40OTYsNDI2Ljg4Yy0xMS4xOTgsMC0yMC4yNzUtOS4wNzgtMjAuMjc1LTIwLjI3NVYyNDQuNTQ0YzAtMTEuMTk4LDkuMDc4LTIwLjI3NSwyMC4yNzUtMjAuMjc1ICBzMjAuMjc1LDkuMDc4LDIwLjI3NSwyMC4yNzV2MTYyLjA2MUMxMjMuNzcyLDQxNy44MDIsMTE0LjY5NCw0MjYuODgsMTAzLjQ5Niw0MjYuODh6IiBmaWxsPSIjNDE0YjgyIiBkYXRhLW9yaWdpbmFsPSIjNDE0YjgyIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTI3MC42MzMsMTM3LjU2NmMtNC44OTctNy44ODctMTUuMjU5LTEwLjMxMS0yMy4xNDctNS40MTVsLTM0LjA0NSwyMS4xMzh2LTMxLjQzMSAgYy0wLjEwOS0yMS44MjQtMTguMTEyLTM5LjU4LTM5LjkzNy0zOS41OGgtMC42MjJjLTEwLjc0NiwwLTc5LjE1MSwwLTkwLjI2OCwwYy0yMi4yOCwwLTQwLjQ5NywxNy44NDctNDAuNjA3LDM5Ljc4MyAgYzAsMC4wMjgsMCwwLjA1NywwLDAuMDg1djEyNC4xMjhjMCw5LjMzMSw3LjU2NSwxNi44OTYsMTYuODk2LDE2Ljg5NnMxNi44OTYtNy41NjUsMTYuODk2LTE2Ljg5NlYxMjIuMjAzICBjMC4wMzYtMy4yMTMsMy4yNzUtNi4xMzIsNi44MTUtNi4xMzJoMC42MDh2MTI4LjQ3NGg4OS40OTVjMC0xMS45NzgsMC0xMTUuMTc4LDAtMTI4LjY0NmMwLjA5LDAsMC44NzgsMCwwLjc4OCwwICBjMy4zOCwwLDYuNDUzLDIuNzUsNi40Nyw2LjEzdjYxLjQ3NWMwLjA2NiwxMy4xNjMsMTQuNTU0LDIxLjEwMiwyNS42NzYsMTQuMTk3bDU5LjU3MS0zNi45ODYgIEMyNzMuMTA2LDE1NS44MTYsMjc1LjUyOSwxNDUuNDUzLDI3MC42MzMsMTM3LjU2NnoiIGZpbGw9IiMyNTJkNWMiIGRhdGEtb3JpZ2luYWw9IiMyNTJkNWMiIGNsYXNzPSIiPjwvcGF0aD4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNMjcwLjYzMywxMzcuNTY2Yy00Ljg5Ny03Ljg4Ny0xNS4yNTktMTAuMzExLTIzLjE0Ny01LjQxNWwtMzQuMDQ1LDIxLjEzOHYtMzEuNDMxICBjLTAuMTA5LTIxLjgyNC0xOC4xMTItMzkuNTgtMzkuOTM3LTM5LjU4Yy01Ljc3MSwwLTM5Ljk5MSwwLTQ1LjU0MSwwdjE2Mi4yNjVoNDQuNzUzYzAtMTEuOTc4LDAtMTE1LjE3OCwwLTEyOC42NDYgIGMwLjA5LDAsMC44NzgsMCwwLjc4OCwwYzMuMzgsMCw2LjQ1MywyLjc1LDYuNDcsNi4xM3Y2MS40NzVjMC4wNjYsMTMuMTYzLDE0LjU1NCwyMS4xMDIsMjUuNjc2LDE0LjE5N2w1OS41NzEtMzYuOTg2ICBDMjczLjEwNiwxNTUuODE2LDI3NS41MjksMTQ1LjQ1MywyNzAuNjMzLDEzNy41NjZ6IiBmaWxsPSIjMWIyMjRhIiBkYXRhLW9yaWdpbmFsPSIjMWIyMjRhIiBjbGFzcz0iIj48L3BhdGg+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTI3MC42MzMsMTM3LjU2NmMtNC44OTctNy44ODctMTUuMjU5LTEwLjMxMS0yMy4xNDctNS40MTVsMTcuNzMzLDI4LjU2MiAgQzI3My4xMDYsMTU1LjgxNiwyNzUuNTI5LDE0NS40NTMsMjcwLjYzMywxMzcuNTY2eiIgZmlsbD0iI2ZmYjY5ZSIgZGF0YS1vcmlnaW5hbD0iI2ZmYjY5ZSIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJCgkJPHJlY3QgeD0iMjM2LjU1IiB5PSIxNDQuNjc2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC41MjI2IC0wLjg1MjYgMC44NTI2IC0wLjUyMjYgMjU5LjM1OTggNDQxLjc0ODQpIiBzdHlsZT0iIiB3aWR0aD0iMzMuNjE5IiBoZWlnaHQ9IjcuMTY2IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIj48L3JlY3Q+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNNDIuMDAxLDIzNy41NnY4LjcxNWMwLDkuMzMxLDcuNTY1LDE2Ljg5NiwxNi44OTYsMTYuODk2czE2Ljg5Ni03LjU2NSwxNi44OTYtMTYuODk2di04LjcxNSAgIEw0Mi4wMDEsMjM3LjU2TDQyLjAwMSwyMzcuNTZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIj48L3BhdGg+CjwvZz4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNNDIuMDAxLDI0NS44NHYwLjQzNWMwLDkuMzMxLDcuNTY1LDE2Ljg5NiwxNi44OTYsMTYuODk2czE2Ljg5Ni03LjU2NSwxNi44OTYtMTYuODk2di0wLjQzNSAgTDQyLjAwMSwyNDUuODRMNDIuMDAxLDI0NS44NHoiIGZpbGw9IiNmZmI2OWUiIGRhdGEtb3JpZ2luYWw9IiNmZmI2OWUiIGNsYXNzPSIiPjwvcGF0aD4KPHBvbHlnb24geG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBwb2ludHM9IjEwMi4xODMsODIuMjc4IDEyNy45NjMsMTQ5LjkzNCAxNTMuNzUsODIuMjc4ICIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9wb2x5Z29uPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSIiIGQ9Ik0xMzkuMTc2LDEwNS4zMWwtNS43MjctMTAuNDE2bDQuOTM2LTguOTc3YzAuODk4LTEuNjMzLTAuMjg1LTMuNjM3LTIuMTUxLTMuNjM3aC0xNi41NDcgIGMtMS44NjQsMC0zLjA1LDIuMDAyLTIuMTUxLDMuNjM3bDQuOTUzLDkuMDA3bC01LjcxMSwxMC4zODhjLTAuNzkxLDEuNDM5LTEuMDQ4LDMuMTA5LTAuNzI2LDQuNzE5bDMuNTIzLDE3Ljg4NGw4LjM4OCwyMi4wMjEgIGw4LjM5Ni0yMi4wMjRsMy41NDMtMTcuODc5QzE0MC4yMjUsMTA4LjQyMSwxMzkuOTY3LDEwNi43NDksMTM5LjE3NiwxMDUuMzF6IiBmaWxsPSIjZmYzYzNjIiBkYXRhLW9yaWdpbmFsPSIjZmYzYzNjIj48L3BhdGg+CjxyZWN0IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMTQwLjQ0MyIgeT0iMTM0LjI2MiIgc3R5bGU9IiIgd2lkdGg9IjIyLjMxOSIgaGVpZ2h0PSI2Ljg4MyIgZmlsbD0iIzI1MmQ1YyIgZGF0YS1vcmlnaW5hbD0iIzI1MmQ1YyIgY2xhc3M9IiI+PC9yZWN0Pgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGNpcmNsZSBzdHlsZT0iIiBjeD0iNDI5LjExNCIgY3k9IjMyOC4wOTkiIHI9IjMzLjk5MiIgZmlsbD0iIzgwMzkxYiIgZGF0YS1vcmlnaW5hbD0iIzgwMzkxYiI+PC9jaXJjbGU+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNNDcyLjk5NiwzNzIuOTI5Yy05Ljk4OSwwLTc4LjA2MywwLTg4LjA1LDBjLTIxLjI5NCwwLTM4Ljg5NywxNy4zMjQtMzkuMDA0LDM4LjYxOHYzOC4wMzVoMzIuODAzICAgdi0zNy44NzFjMC4wMTYtMy4yOTgsMi45MDMtNS45ODEsNi4yMDEtNS45ODFoMC4zMjN2NDMuODUxaDg2Ljg3NHYtNDMuODUxaDAuODU0YzMuMjk4LDAsNi4xODQsMi42ODMsNi4yMDEsNS45ODF2MzcuODcxSDUxMiAgIHYtMzguMDM1QzUxMS44OTMsMzkwLjI1NCw0OTQuMjkyLDM3Mi45MjksNDcyLjk5NiwzNzIuOTI5eiIgZmlsbD0iIzgwMzkxYiIgZGF0YS1vcmlnaW5hbD0iIzgwMzkxYiI+PC9wYXRoPgo8L2c+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTQ3Mi45OTYsMzcyLjkyOUg0NDYuMTFjLTEwLjQ3LDguMzAxLTI0LjIxNCw3Ljk3OC0zMy43NjEsMGgtMjcuNDAyICBjLTIxLjI5NCwwLTM4Ljg5NywxNy4zMjQtMzkuMDA0LDM4LjYxOHYyMy44NzNoMzIuODAzdi0yMy43MDhjMC4wMTYtMy4yOTgsMi45MDMtNS45ODEsNi4yMDEtNS45ODFoMC4zMjN2NDMuODUxaDg2Ljg3NHYtNDMuODUxICBoMC44NTRjMy4yOTgsMCw2LjE4NCwyLjY4Myw2LjIwMSw1Ljk4MXYyMy43MDhoMzIuODAzdi0yMy44NzNDNTExLjg5MywzOTAuMjU0LDQ5NC4yOTIsMzcyLjkyOSw0NzIuOTk2LDM3Mi45Mjl6IiBmaWxsPSIjNTVjN2E2IiBkYXRhLW9yaWdpbmFsPSIjNTVjN2E2Ij48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Y2lyY2xlIHN0eWxlPSIiIGN4PSIyNTYuMTU4IiBjeT0iMzI4LjA5OSIgcj0iMzMuOTkyIiBmaWxsPSIjZmZiNjllIiBkYXRhLW9yaWdpbmFsPSIjZmZiNjllIiBjbGFzcz0iIj48L2NpcmNsZT4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0zMDAuMDM5LDM3Mi45MjljLTkuOTg5LDAtNzguMDYzLDAtODguMDUsMGMtMjEuMjk0LDAtMzguODk3LDE3LjMyNC0zOS4wMDQsMzguNjE4djM4LjAzNWgzMi44MDMgICB2LTM3Ljg3MWMwLjAxNi0zLjI5OCwyLjkwMy01Ljk4MSw2LjIwMS01Ljk4MWgwLjMyM3Y0My44NTFoODYuODc0di00My44NTFoMC44NTRjMy4yOTgsMCw2LjE4NCwyLjY4Myw2LjIwMSw1Ljk4MXYzNy44NzFoMzIuODAzICAgdi0zOC4wMzVDMzM4LjkzNywzOTAuMjU0LDMyMS4zMzQsMzcyLjkyOSwzMDAuMDM5LDM3Mi45Mjl6IiBmaWxsPSIjZmZiNjllIiBkYXRhLW9yaWdpbmFsPSIjZmZiNjllIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNMzAwLjAzOSwzNzIuOTI5aC0yOC4yMjdjLTEwLjQ3LDguMzAxLTI0LjIxNCw3Ljk3OC0zMy43NjEsMEgyMTEuOTkgIGMtMjEuMjk0LDAtMzguODk3LDE3LjMyNC0zOS4wMDQsMzguNjE4djIzLjg3M2gzMi44MDN2LTIzLjcwOGMwLjAxNi0zLjI5OCwyLjkwMy01Ljk4MSw2LjIwMS01Ljk4MWgwLjMyM3Y0My44NTFoODYuODc0di00My44NTEgIGgwLjg1NGMzLjI5OCwwLDYuMTg0LDIuNjgzLDYuMjAxLDUuOTgxdjIzLjcwOGgzMi44MDN2LTIzLjg3M0MzMzguOTM3LDM5MC4yNTQsMzIxLjMzNCwzNzIuOTI5LDMwMC4wMzksMzcyLjkyOXoiIGZpbGw9IiMyNTJkNWMiIGRhdGEtb3JpZ2luYWw9IiMyNTJkNWMiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxjaXJjbGUgc3R5bGU9IiIgY3g9IjgzLjE2MiIgY3k9IjMyNy41NTgiIHI9IjMzLjk5MiIgZmlsbD0iI2ZmYjY5ZSIgZGF0YS1vcmlnaW5hbD0iI2ZmYjY5ZSIgY2xhc3M9IiI+PC9jaXJjbGU+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMTI3LjA1NCwzNzIuMzg3Yy05Ljk4OSwwLTc4LjA2MywwLTg4LjA1LDBjLTIxLjI5NCwwLTM4Ljg5NywxNy4zMjQtMzkuMDA0LDM4LjYxOHYzOC4wMzZoMzIuODAzICAgdi0zNy44NzFjMC4wMTYtMy4yOTgsMi45MDMtNS45ODEsNi4yMDEtNS45ODFoMC4zMjN2NDMuODUxSDEyNi4ydi00My44NTJoMC44NTRjMy4yOTgsMCw2LjE4NCwyLjY4Myw2LjIwMSw1Ljk4MXYzNy44NzFoMzIuODAzICAgdi0zOC4wMzZDMTY1Ljk1MSwzODkuNzExLDE0OC4zNDgsMzcyLjM4NywxMjcuMDU0LDM3Mi4zODd6IiBmaWxsPSIjZmZiNjllIiBkYXRhLW9yaWdpbmFsPSIjZmZiNjllIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNMTI3LjA1NCwzNzIuMzg3SDk4LjgyNmMtMTAuNDcsOC4zMDEtMjQuMjE0LDcuOTc4LTMzLjc2MSwwSDM5LjAwNCAgYy0yMS4yOTQsMC0zOC44OTcsMTcuMzI0LTM5LjAwNCwzOC42MTh2MjMuODczaDMyLjgwM3YtMjMuNzA4YzAuMDE2LTMuMjk4LDIuOTAzLTUuOTgxLDYuMjAxLTUuOTgxaDAuMzIzdjQzLjg1MUgxMjYuMnYtNDMuODUyICBoMC44NTRjMy4yOTgsMCw2LjE4NCwyLjY4Myw2LjIwMSw1Ljk4MXYyMy43MDhoMzIuODAzdi0yMy44NzNDMTY1Ljk1MSwzODkuNzExLDE0OC4zNDgsMzcyLjM4NywxMjcuMDU0LDM3Mi4zODd6IiBmaWxsPSIjNzhiZWZmIiBkYXRhLW9yaWdpbmFsPSIjNzhiZWZmIj48L3BhdGg+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Y2lyY2xlIHN0eWxlPSIiIGN4PSIzNTIuMjY1IiBjeT0iMzg5LjAxNyIgcj0iMzMuOTkyIiBmaWxsPSIjZmZiNjllIiBkYXRhLW9yaWdpbmFsPSIjZmZiNjllIiBjbGFzcz0iIj48L2NpcmNsZT4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0zOTYuMTUzLDQzMy44NDNjLTkuOTg5LDAtNzguMDYzLDAtODguMDUsMGMtMjEuMjk0LDAtMzguODk3LDE3LjMyNC0zOS4wMDQsMzguNjE4djM4LjAzNWgzMi44MDMgICB2LTM3Ljg3MWMwLjAxNi0zLjI5OCwyLjkwMy01Ljk4MSw2LjIwMS01Ljk4MWgwLjMyM3Y0My44NTFoODYuODc0di00My44NTFoMC44NTRjMy4yOTgsMCw2LjE4NCwyLjY4Myw2LjIwMSw1Ljk4MXYzNy44NzFoMzIuODAzICAgdi0zOC4wMzVDNDM1LjA0OSw0NTEuMTY2LDQxNy40NDcsNDMzLjg0MywzOTYuMTUzLDQzMy44NDN6IiBmaWxsPSIjZmZiNjllIiBkYXRhLW9yaWdpbmFsPSIjZmZiNjllIiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iIiBkPSJNMzk2LjE1Myw0MzMuODQzaC0yNi44ODZjLTEwLjQ3LDguMzAxLTI0LjIxNCw3Ljk3OC0zMy43NjEsMGgtMjcuNDAyICBjLTIxLjI5NCwwLTM4Ljg5NywxNy4zMjQtMzkuMDA0LDM4LjYxOHYyMy44NzNoMzIuODAzdi0yMy43MDhjMC4wMTYtMy4yOTgsMi45MDMtNS45ODEsNi4yMDEtNS45ODFoMC4zMjN2NDMuODUxSDM5NS4zdi00My44NTEgIGgwLjg1NGMzLjI5OCwwLDYuMTg0LDIuNjgzLDYuMjAxLDUuOTgxdjIzLjcwOGgzMi44MDN2LTIzLjg3M0M0MzUuMDQ5LDQ1MS4xNjYsNDE3LjQ0Nyw0MzMuODQzLDM5Ni4xNTMsNDMzLjg0M3oiIGZpbGw9IiM3OGJlZmYiIGRhdGEtb3JpZ2luYWw9IiM3OGJlZmYiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxjaXJjbGUgc3R5bGU9IiIgY3g9IjE3OS4zMDgiIGN5PSIzODkuMDE3IiByPSIzMy45OTIiIGZpbGw9IiNiYTY3NDYiIGRhdGEtb3JpZ2luYWw9IiNiYTY3NDYiPjwvY2lyY2xlPgoJPHBhdGggc3R5bGU9IiIgZD0iTTIyMy4xOTYsNDMzLjg0M2MtOS45ODksMC03OC4wNjMsMC04OC4wNSwwYy0yMS4yOTQsMC0zOC44OTcsMTcuMzI0LTM5LjAwNCwzOC42MTh2MzguMDM1aDMyLjgwMyAgIHYtMzcuODcxYzAuMDE2LTMuMjk4LDIuOTAzLTUuOTgxLDYuMjAxLTUuOTgxaDAuMzIzdjQzLjg1MWg4Ni44NzR2LTQzLjg1MWgwLjg1NGMzLjI5OCwwLDYuMTg0LDIuNjgzLDYuMjAxLDUuOTgxdjM3Ljg3MUgyNjIuMiAgIHYtMzguMDM1QzI2Mi4wOTIsNDUxLjE2NiwyNDQuNDkxLDQzMy44NDMsMjIzLjE5Niw0MzMuODQzeiIgZmlsbD0iI2JhNjc0NiIgZGF0YS1vcmlnaW5hbD0iI2JhNjc0NiI+PC9wYXRoPgo8L2c+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTIyMy4xOTYsNDMzLjg0M2gtMjguMjI3Yy0xMC40Nyw4LjMwMS0yNC4yMTQsNy45NzgtMzMuNzYxLDBoLTI2LjA2MiAgYy0yMS4yOTQsMC0zOC44OTcsMTcuMzI0LTM5LjAwNCwzOC42MTh2MjMuODczaDMyLjgwM3YtMjMuNzA4YzAuMDE2LTMuMjk4LDIuOTAzLTUuOTgxLDYuMjAxLTUuOTgxaDAuMzIzdjQzLjg1MWg4Ni44NzR2LTQzLjg1MSAgaDAuODU0YzMuMjk4LDAsNi4xODQsMi42ODMsNi4yMDEsNS45ODF2MjMuNzA4aDMyLjgwM3YtMjMuODczQzI2Mi4wOTIsNDUxLjE2NiwyNDQuNDkxLDQzMy44NDMsMjIzLjE5Niw0MzMuODQzeiIgZmlsbD0iI2ZmM2MzYyIgZGF0YS1vcmlnaW5hbD0iI2ZmM2MzYyI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" /></span>
                          <span className="title">Classroom Hours</span>
                          <span className="ml-auto font-weight-bold">143</span>
                        </div>
                        <div className="progress-group-bars">
                          <CProgress className="progress-xs" color="warning" value="8" />
                        </div>
                      </div>
                    </CCol>
                  </CRow>
                  <br />
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
                            <strong className="h4">เรียนในห้อง VS เรียนนอกห้อง</strong>
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
                        labels={['Online', 'Classroom']}
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
                            <strong className="h4">หลักสูตรใกล้มาถึง</strong>
                          </CCallout>
                        </CCol>
                      </CRow>

                      <div className={classes.root}>
                        <GridList cellHeight={300} className={classes.gridList} >
                          {
                            CourseData.filter(id => id.courseType === "classroom" && id.hot === "true").map(courseItem => (
                              <div className="col-xl-6" style={{ maxHeight: '250px' }}>
                                <CardBrief
                                  key={courseItem.id}
                                  coursename={courseItem.title}
                                  season={courseItem.season}
                                  category1={courseItem.category1}
                                  category2={courseItem.category2}
                                  time={courseItem.time}
                                  rating={courseItem.rating}
                                  duration={courseItem.duration}
                                  place={courseItem.place}
                                  img={courseItem.img}
                                  hot={courseItem.hot}
                                />
                              </div>
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

            <CCol xl="12">
              <CCard style={{ minHeight: '95%' }}>
                <CCardBody>
                  <CCallout color="warning">
                    <strong className="h4">Competency</strong>
                  </CCallout>

                </CCardBody>
                <CCardBody style={{ width: '450px', marginRight: 'auto', marginLeft: 'auto' }}>
                  <CChartRadar
                    datasets={[
                      {
                        label: '2019',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        tooltipLabelColor: 'rgba(179,181,198,1)',
                        data: [65, 59, 90, 81, 56, 55, 40]
                      },
                      {
                        label: '2020',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        tooltipLabelColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
                      }
                    ]}
                    options={{
                      aspectRatio: 1,
                      tooltips: {
                        enabled: true
                      }
                    }}
                    labels={[
                      'Eating', 'Drinking', 'Sleeping', 'Designing',
                      'Coding', 'Cycling', 'Running'
                    ]}
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
