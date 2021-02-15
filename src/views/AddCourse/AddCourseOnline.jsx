import React, { useState } from "react";
import Topic from "../Course/CourseCard/Component/Topic";
import Title from "../Course/CourseCard/Component/Title";
import Dropdown from "./Component/dropdown";
import Editor from "./Component/TextEditors";
import Dropzone from "./Component/dropzone";
import './AddCourse.css';
import Header from "../Header/Header";
import {
    CCallout, CInputGroup, CInputGroupAppend,
    CInputGroupPrepend, CInputGroupText, CInput, CFormGroup, CButton, CForm
} from '@coreui/react'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CreateArea from "./Video/CreateArea";
import Chapter from "./Video/Chapter";
import Note from "./Video/Note";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(25),
        'font-family': 'Kanit, sans-serif',
        'font-weight': 500,
        flexBasis: '100%',
        flexShrink: 0,
        textAlign: 'left',
        "margin-bottom": '10px',
        color: '#3C1518'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(20),
        color: theme.palette.text.secondary,
    },
    'topcontainer': {
        background: '#2176AE',
        width: '100%',
        'padding-top': '1%',
        marginTop: '1%',
        'padding-bottom': '1%'
    },
    'bottomcontainer': {
        background: '#0FA3B1',
        width: '95%',
        'padding-top': '0.5%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    'sectioncontainer': {
        background: 'brown',
        'border-radius': '0px',
        width: '95%'
    },
    sectionTitleContainer: {
        background: 'brown',
        'border-radius': '0px',
        width: '100%',
    },
    'chaptercontainer': {
        background: 'orange',
        'border-radius': '0px',
        width: '80%'
    },
    'topiccontainer': {
        background: 'white',
        width: '80%'
    },
}));

const AddCourseOnline = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [expandedChap, setExpandedChap] = useState(false);
    const [expandedTopic, setExpandedTopic] = useState(false);

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleChangeAccordionChap = (chapter) => (eventChap, isExpandedChap) => {
        setExpandedChap(isExpandedChap ? chapter : false);
    };

    const handleChangeAccordionTopic = (topic) => (eventTop, isExpandedTopic) => {
        setExpandedTopic(isExpandedTopic ? topic : false);
    };

    const [notes, setNotes] = useState([]);
    const [showChap, setShowChap] = useState([]);
    const [showTopic, setShowTopic] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function addChapter(newChapter) {
        setShowChap(prevChapter => {
            return [...prevChapter, newChapter];
        });
    }

    function addTopic(newTopic) {
        setShowTopic(prevTopic => {
            return [...prevTopic, newTopic];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    const sectionBackground = (id) => {
        if (id % 4 == 0) {
            return "#2F9C95";
        }
        else if (id % 4 == 1) {
            return "#38423B";
        }
        else if (id % 4 == 2) {
            return "#00A878";
        }
        else if (id % 4 == 3) {
            return "#3F5E5A";
        }
    }

    const chapterBackground = (id) => {
        if (id % 2 == 0) {
            return "#6B6D76";
        }
        else if (id % 2 == 1) {
            return "#A69888";
        }
    }

    return (
        <div style={{ "font-family": "Kanit, sans-serif" }}>
            <Header bgColor='#63B995' />
            <div className="topicBackground" style={{ backgroundColor: '#63B995' }}>
                <div className="container-xl" style={{ paddingBottom: '20px' }}>
                    <div className="titleBox" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '0px', width: '100%' }}>
                        <img style={{ width: '30px', height: '30px', display: 'inline', position: 'relative', top: '-7px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                        <Title name="เพิ่มหลักสูตรใหม่ (Online)" color="white" display="inline" marginLeft="2%" marginRight="2%" />
                        <img style={{ width: '30px', height: '30px', display: 'inline', position: 'relative', top: '-7px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                    </div>
                </div>
            </div>

            <div className="IDPBox">
                <div className="container">
                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>ประเภทการเข้าถึง</h4>
                    </CCallout>
                    <div style={{ marginLeft: '3%' }}>
                        <Dropdown label="ระดับการเข้าถึง" firstchoice="public" secondchoice="private" />
                    </div>

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>ชื่อหลักสูตร</h4>
                    </CCallout>
                    <Editor placeholder="ชื่อหลักสูตร" />

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>รายละเอียดหลักสูตร</h4>
                    </CCallout>
                    <Editor placeholder="รายละเอียดหลักสูตร" />

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>เค้าโครงหลักสูตร</h4>
                    </CCallout>
                    <Editor placeholder="เค้าโครงหลักสูตร" />

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>หลักสูตรนี้เหมาะสมกับ</h4>
                    </CCallout>
                    <Editor placeholder="หลักสูตรนี้เหมาะสมกับ" />

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>ข้อมูลเพิ่มเติมหลักสูตร</h4>
                    </CCallout>
                    <div style={{ marginLeft: '3%' }}>
                        <Dropdown label="ภาษา" firstchoice="ไทย" secondchoice="อังกฤษ" />
                    </div>

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>หมายเหตุ</h4>
                    </CCallout>
                    <Editor placeholder="หมายเหตุ" />

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>ภาพประกอบหลักสูตร</h4>
                    </CCallout>
                    <Dropzone width="700px" height="400px" />

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>ราคา</h4>
                    </CCallout>
                    <CInputGroup style={{ width: '30%', marginLeft: '3%', marginTop: '20px' }}>
                        <CInputGroupPrepend>
                            <CInputGroupText>฿</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput id="appendedPrependedInput" size="20" type="text" />
                        <CInputGroupAppend>
                            <CInputGroupText>.00</CInputGroupText>
                        </CInputGroupAppend>
                    </CInputGroup>

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>ผู้สอน</h4>
                    </CCallout>
                    <CForm action="" method="post" style={{ width: '50%', marginLeft: '3%', marginTop: '20px' }}>
                        <CFormGroup>
                            <CInputGroup>
                                <CInputGroupPrepend>
                                    <CInputGroupText>ชื่อ</CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="email" id="username3" name="username3" autoComplete="name" />
                            </CInputGroup>
                        </CFormGroup>
                    </CForm>

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '10px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>รูปผู้สอน</h4>
                    </CCallout>
                    <Dropzone width="350px" height="350px" />

                    <CCallout color="success" style={{ marginTop: '0px', marginBottom: '30px', marginTop: '30px', marginLeft: '3%' }}>
                        <h4 style={{ color: 'black' }}>เพิ่มวิดีโอ</h4>
                    </CCallout>

                    {notes.map((noteItem, noteindex) => {
                        return (
                            <center>
                                <Accordion className={classes.sectioncontainer} style={{ backgroundColor: sectionBackground(noteindex) }} expanded={expanded === 'panel' + (noteindex + 1)} onChange={handleChangeAccordion('panel' + (noteindex + 1))}>
                                    <AccordionSummary className={classes.sectionTitleContainer} style={{ backgroundColor: sectionBackground(noteindex) }}
                                        expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className={classes.heading} style={{ color: 'white' }}>Section {noteindex + 1}  {noteItem.title}</Typography>
                                    </AccordionSummary>
                                    {showChap.filter(id => id.notekey === noteindex).map((chapterItem, chapindex) => {
                                        return (
                                            <Accordion className={classes.chaptercontainer} style={{backgroundColor:chapterBackground(chapindex)}} expanded={expandedChap === 'chapter' + (chapindex + 1)} onChange={handleChangeAccordionChap('chapter' + (chapindex + 1))}>
                                                <AccordionSummary style={{backgroundColor:chapterBackground(chapindex)}}
                                                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography className={classes.heading} style={{ color: 'white' }}>Chapter {chapindex + 1}  {chapterItem.title}</Typography>
                                                </AccordionSummary>

                                                {showTopic.filter(id => id.notekey === noteindex && id.chapkey === chapindex).map((topicItem, topicindex) => {
                                                    return (
                                                        <Accordion className={classes.topiccontainer}  expanded={expandedTopic === 'topic' + (topicindex + 1)} onChange={handleChangeAccordionTopic('topic' + (topicindex + 1))}>
                                                            <AccordionSummary 
                                                                expandIcon={<ExpandMoreIcon style={{ color: '#3C1518' }} />}
                                                                aria-controls="panel1bh-content"
                                                                id="panel1bh-header"
                                                            >
                                                                <Typography className={classes.heading}>Topic {topicindex + 1}  {topicItem.title}</Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>

                                                                <Dropzone />


                                                            </AccordionDetails>
                                                        </Accordion>
                                                    );
                                                })}
                                                <Chapter
                                                    key={chapindex}
                                                    id={chapindex}
                                                    title={chapterItem.title}
                                                    content={chapterItem.content}
                                                    noteindex={noteindex}
                                                    addTopic={addTopic}
                                                    bgColor={chapterBackground(chapindex)}
                                                />
                                            </Accordion>
                                        );
                                    })}
                                    <Note
                                        onAdd={addNote}
                                        key={noteindex}
                                        id={noteindex}
                                        title={noteItem.title}
                                        content={noteItem.content}
                                        onDelete={deleteNote}
                                        addChapter={addChapter}
                                        bgColor={sectionBackground(noteindex)}
                                    />
                                </Accordion>
                            </center>
                        );
                    })}
                    <div className={classes.bottomcontainer}>
                        <center>
                            <CreateArea onAdd={addNote} />
                        </center>
                    </div>

                </div>
            </div>

        </div>);
}

export default AddCourseOnline;
