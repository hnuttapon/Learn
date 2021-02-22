import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Header from "../Header/Header";
import ReactPlayer from 'react-player/lazy';

import data from "./OnlineLearningData/OnlineLearningDataVideo";
import SectionData from "./OnlineLearningData/SectionData";
import ChapterData from "./OnlineLearningData/ChapterData";

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const drawerWidth = 380;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '0',
    },
    appBar: {
        width: `calc(100%px)`,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        height: '0px',
        'z-index': 1,
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: '0px',
    },
    // necessary for content to be below app bar
    toolbar: {
        minHeight: '60px',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        marginTop: '0px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '80%',
        flexShrink: 0,
        textAlign:'left',
    },
}));

export default function PermanentDrawerRight() {
    const classes = useStyles();

    const [Video, setVideo] = useState({
        currentSection: 1,
        currentChapter: 1,
    });

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


    const setCurrentVideo = (a, b) => {
        setVideo({
            currentSection: a,
            currentChapter: b,
        })
        console.log("aa");
    };


    return (
        <div>
            <div className={classes.root}>

                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Header bgColor='#4DAA57' />
                </AppBar>
                <main className={classes.content}>
                    {data.filter(id => id.ChapterNo === Video.currentChapter && id.SectionNo === Video.currentSection).map((dataItem) => {
                        return (
                            <ReactPlayer
                                url={dataItem.Video}
                                controls={true}
                                width="100%"
                                height="500px"
                            />
                        );
                    })}
                </main>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="right"
                >
                    <div className={classes.toolbar} />
                    {SectionData.map((setionItem, sectionindex) => {
                        return (
                            <center>
                                <Accordion expanded={expanded === 'panel' + (sectionindex + 1)} onChange={handleChangeAccordion('panel' + (sectionindex + 1))}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className={classes.heading} >Section {sectionindex + 1}  {setionItem.SectionName}</Typography>
                                    </AccordionSummary>
                                    {ChapterData.filter(id => id.SectionNo === (sectionindex + 1)).map((chapterItem, chapindex) => {
                                        return (
                                            <Accordion expanded={expandedChap === 'chapter' + (chapindex + 1)} onChange={handleChangeAccordionChap('chapter' + (chapindex + 1))}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography className={classes.heading}>Chapter {chapindex + 1}  {chapterItem.ChapterName}</Typography>
                                                </AccordionSummary>

                                                {data.filter(id => id.SectionNo === (sectionindex + 1) && id.ChapterNo === (chapindex+1)).map((dataItem, dataindex) => {
                                                    return (
                                                        <button onClick={() => {
                                                            setCurrentVideo(dataItem.SectionNo, dataItem.ChapterNo)
                                                        }}>
                                                            <h2>{dataindex + 1} &nbsp; {dataItem.Topic}</h2>
                                                        </button>
                                                    );
                                                })}
                                            </Accordion>
                                        );
                                    })}
                                </Accordion>
                            </center>
                        );
                    })}
                </Drawer>
            </div>
        </div>
    );
}
