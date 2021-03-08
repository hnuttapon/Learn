import React, { Fragment, useState } from "react";
import Title from "../../Course/CourseCard/Component/Title";
import Header from "../../Header/Header";
import Output from "./Component/Output";
import Input from "./Component/Input";
import CourseData from "../../Course/CourseData/CourseData";
import Historycard from "./Component/HistoryCard";
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import "./MyHistory.css";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { CCallout } from '@coreui/react';

///Dropdown
import Dropdown from "./Component/Dropdown";
import courseType from "./Data/CourseTypeData";
import courseLearning from "./Data/CourseLearningData"; 
import LearningLocation from "./Data/LearningLocation";

import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
    DatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function MyHistory(props) {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        console.log(id);
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, ['left']: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, true)}
        >

            <div style={{ marginLeft: '10%' }}>
                <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                    <h4 style={{ color: 'black',"font-family": "Kanit, sans-serif" }}>ประเภท</h4>
                </CCallout>
                {/* <Dropdown label="ประเภท" firstchoice="Online" secondchoice="Classroom" /> */}
                <Dropdown label="ประเภท" data={courseType} />
                
                <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                    <h4 style={{ color: 'black',"font-family": "Kanit, sans-serif" }}>รูปแบบ</h4>
                </CCallout>
                {/* <Dropdown label="รูปแบบ" firstchoice="Mandatory" secondchoice="OJT" /> */}
                <Dropdown label="รูปแบบ" data={courseLearning} />
                
                <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                    <h4 style={{ color: 'black',"font-family": "Kanit, sans-serif" }}>เดือนที่เรียน</h4>
                </CCallout>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        style={{ marginTop: '20px' }}
                        variant="inline"
                        openTo="year"
                        views={["year", "month"]}
                        label="Year and Month"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </MuiPickersUtilsProvider>
                <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                    <h4 style={{ color: 'black',"font-family": "Kanit, sans-serif" }}>สถานที่เรียน</h4>
                </CCallout>
                <Dropdown label="สถานที่เรียน" data={LearningLocation} />

                <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '2%' }}>
                    <h4 style={{ color: 'black',"font-family": "Kanit, sans-serif" }}>หมวดหมู่วิชา</h4>
                </CCallout>

            </div>
        </div>
    );

    return (
        <div>
            <Header bgColor='#63B995' />
            <div className="topicBackground" style={{ backgroundColor: '#63B995' }}>
                <div className="container-xl" style={{ paddingBottom: '20px' }}>
                    <div className="titleBox" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '0px', width: '100%' }}>
                        <img style={{ width: '30px', height: '30px', display: 'inline', position: 'relative', top: '-7px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                        <Title name="My History Profile" color="white" display="inline" marginLeft="2%" marginRight="2%" />
                        <img style={{ width: '30px', height: '30px', display: 'inline', position: 'relative', top: '-7px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                    </div>
                </div>
            </div>

            <div className="lightGreen IDPBox">

                <div className="container-xl ">
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button variant="contained" className="filterButton" onClick={toggleDrawer(anchor, true)}>
                                <img style={{ width: '27px', height: '27px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQyMC4wNDEgMGgtMzI4LjA4MmMtNTAuNzA4IDAtOTEuOTU5IDQxLjI1MS05MS45NTkgOTEuOTU5djMyOC4wODFjMCA1MC43MDkgNDEuMjUxIDkxLjk2IDkxLjk1OSA5MS45NmgzMjguMDgyYzUwLjcwOCAwIDkxLjk1OS00MS4yNTEgOTEuOTU5LTkxLjk1OXYtMzI4LjA4MmMwLTUwLjcwOC00MS4yNTEtOTEuOTU5LTkxLjk1OS05MS45NTl6bTEyLjY0OSAzOTkuNTYxaC0xNjQuMDkxYy0xNC40MjIgNDIuNjktNzUuMDA2IDQyLjc1NS04OS40NDkgMGgtOTkuODRjLTE5LjkyMiAwLTE5LjkyNy0zMC4xMTggMC0zMC4xMThoOTkuODRjMTQuNDIxLTQyLjY5IDc1LjAwNi00Mi43NTUgODkuNDQ5IDBoMTY0LjA5MWMxOS45MjIgMCAxOS45MjggMzAuMTE4IDAgMzAuMTE4em0wLTEyOC41MDJoLTM1LjU4OWMtMTQuNDIyIDQyLjY5LTc1LjAwNiA0Mi43NTUtODkuNDUgMGgtMjI4LjM0MWMtMTkuOTIyIDAtMTkuOTI3LTMwLjExOCAwLTMwLjExOGgyMjguMzQyYzE0LjQyMS00Mi42OSA3NS4wMDYtNDIuNzU1IDg5LjQ1IDBoMzUuNTg5YzE5LjkyMSAwIDE5LjkyNyAzMC4xMTgtLjAwMSAzMC4xMTh6bTAtMTI4LjUwMmgtMjI4LjM0MmMtMTQuNDIyIDQyLjY5LTc1LjAwNiA0Mi43NTUtODkuNDQ5IDBoLTM1LjU4OWMtMTkuOTIyIDAtMTkuOTI3LTMwLjExOCAwLTMwLjExOGgzNS41ODljMTQuNDIxLTQyLjY5IDc1LjAwNi00Mi43NTUgODkuNDQ5IDBoMjI4LjM0MmMxOS45MjIgMCAxOS45MjggMzAuMTE4IDAgMzAuMTE4eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMjMuODc1IDM2Ny40MzVjLTIyLjU4MSAwLTIyLjU2OSAzNC4xMzMgMCAzNC4xMzMgMjIuNTguMDAxIDIyLjU2OC0zNC4xMzMgMC0zNC4xMzN6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE1OS42MjQgMTEwLjQzMWMtMjIuNTgxIDAtMjIuNTY5IDM0LjEzMyAwIDM0LjEzMyAyMi41OC4wMDEgMjIuNTY4LTM0LjEzMyAwLTM0LjEzM3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzUyLjM3NiAyMzguOTMzYy0yMi41ODEgMC0yMi41NjkgMzQuMTMzIDAgMzQuMTMzIDIyLjU4MS4wMDEgMjIuNTY5LTM0LjEzMyAwLTM0LjEzM3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" />
                                &nbsp; Filter
                            </Button>
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}

                    <Button variant="contained" className="filterButton" href="/Export">
                        <img style={{ width: '27px', height: '27px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMzg1IDAtMjU2IDExNC42MTUtMjU2IDI1NnMxMTQuNjE1IDI1NiAyNTYgMjU2IDI1Ni0xMTQuNjE1IDI1Ni0yNTYtMTE0LjYxNS0yNTYtMjU2LTI1NnptMTQ0IDM0NGMwIDI2LjQ2Ny0yMS41MzMgNDgtNDggNDhoLTE3NmMtMjYuNDY3IDAtNDgtMjEuNTMzLTQ4LTQ4di0xNzZjMC0yNi40NjcgMjEuNTMzLTQ4IDQ4LTQ4aDgwYzguODM2IDAgMTYgNy4xNjQgMTYgMTZzLTcuMTY0IDE2LTE2IDE2aC04MGMtOC44MjIgMC0xNiA3LjE3OC0xNiAxNnYxNzZjMCA4LjgyMiA3LjE3OCAxNiAxNiAxNmgxNzZjOC44MjIgMCAxNi03LjE3OCAxNi0xNnYtODBjMC04LjgzNiA3LjE2NC0xNiAxNi0xNnMxNiA3LjE2NCAxNiAxNnptLTEuNTQ0LTE2OS4xNzhjLTEuNjgyIDMuNTY0LTEuMSAyLjQ0OC0zNS4xNDMgMzYuNDkyLTMuMTI0IDMuMTI0LTcuMjE4IDQuNjg2LTExLjMxMyA0LjY4Ni0xNC4xMjYgMC0yMS40MjEtMTcuMjA2LTExLjMxMy0yNy4zMTNsNC4zNjYtNC4zNjZjLTQwLjg3IDMuNTM1LTczLjA1MyAzNy45MDktNzMuMDUzIDc5LjY3OSAwIDguODM2LTcuMTY0IDE2LTE2IDE2cy0xNi03LjE2NC0xNi0xNmMwLTU5LjU5NiA0Ni43OS0xMDguNDYzIDEwNS41NjItMTExLjgxMWwtNC44NzYtNC44NzZjLTYuMjQ5LTYuMjQ4LTYuMjQ5LTE2LjM3OSAwLTIyLjYyNyA2LjI0OC02LjI0OSAxNi4zNzktNi4yNDkgMjIuNjI3IDAgMzQuNzY3IDM0Ljc2NyAzMy44NTIgMzMuMjkzIDM1LjQ2OCAzNy4xOTIgMS43OTMgNC4zMzYgMS41MzIgOS4wMi0uMzI1IDEyLjk0NHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
                        &nbsp; Export
                    </Button>


                    <CCallout color="success" style={{ marginBottom: '30px', marginTop: '30px', marginLeft: '2%' }}>
                        <h3 style={{ color: 'black',"font-family": "Kanit, sans-serif" }}>Mandatory</h3>
                    </CCallout>
                    <div className="row">
                        {
                            CourseData.filter(id => id.courseType === "online").map(courseItem => (
                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" align="center">
                                    <Historycard
                                        id={courseItem.id}
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
                                </div>
                            ))
                        }
                    </div>

                    <CCallout color="success" style={{ marginBottom: '30px', marginTop: '30px', marginLeft: '2%' }}>
                        <h3 style={{ color: 'black',"font-family": "Kanit, sans-serif" }}>Other</h3>
                    </CCallout>

                    <div className="row">

                        {
                            CourseData.filter(id => id.courseType === "online").map(courseItem => (

                                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" align="center">
                                    <Historycard
                                        id={courseItem.id}
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
                                </div>
                            ))
                        }
                    </div>

                    <CCallout color="success" style={{ marginBottom: '30px', marginTop: '30px', marginLeft: '2%' }}>
                        <h3 style={{ color: 'black',"font-family": "Kanit, sans-serif" }}>On Job Training List</h3>
                    </CCallout>

                    <center>
                        <Output
                            no="1"
                            value="React.js"
                        />
                        <Output
                            no="2"
                            value="Database Design"
                        />
                        <Output
                            no="3"
                            value="ASP.net"
                        />
                    </center>
                    {notes.map((noteItem, index) => {
                        return (
                            <Input
                                key={index}
                                id={index}
                                no={index + 4}
                                name={noteItem.name}
                                placeholder="On Job Training List"
                            />
                        );
                    })}
                    <button style={{ backgroundColor: props.bgColor, border: 'none', boxShadow: 'none', marginLeft: '87%' }} variant="contained" onClick={addNote}>
                        <img width="40px" height="40px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDE1MiAxNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9Il8wMS5BZGQiIGRhdGEtbmFtZT0iMDEuQWRkIj48cGF0aCBkPSJtMTE3IDBoLTgyYTM1LjEgMzUuMSAwIDAgMCAtMzUgMzV2ODJhMzUuMSAzNS4xIDAgMCAwIDM1IDM1aDgyYTM1LjEgMzUuMSAwIDAgMCAzNS0zNXYtODJhMzUuMSAzNS4xIDAgMCAwIC0zNS0zNXptLTkuNzkgODIuNTVoLTIzLjA3YTEuMzQgMS4zNCAwIDAgMCAtMS4zNSAxLjM1djIzLjFhNi43OSA2Ljc5IDAgMCAxIC0xMy41OCAwdi0yMy4xYTEuMzQgMS4zNCAwIDAgMCAtMS4zNS0xLjM1aC0yMy4wN2E2Ljc5IDYuNzkgMCAxIDEgMC0xMy41OGgyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNS0xLjM1di0yMy4wN2E2Ljc5IDYuNzkgMCAwIDEgMTMuNTggMHYyMy4wN2ExLjM0IDEuMzQgMCAwIDAgMS4zNSAxLjM4aDIzLjA3YTYuNzkgNi43OSAwIDAgMSAwIDEzLjU4eiIgZmlsbD0iIzM2NjI4OCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==" />
                    </button>
                    <div>
                    </div>
                </div>
            </div>


        </div>);
}

export default MyHistory;
