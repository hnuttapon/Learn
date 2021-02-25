import React, { useState } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
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

import "./OnlineLearning.css";

const drawerWidth = 380;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '0',
        minHeight: `calc(100%px)`,
    },
    appBar: {
        width: `calc(100%px)`,
    },
    drawer: {
        width: drawerWidth,
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
        marginTop: '8vh',
        height: '92vh',
        backgroundColor:'#095256'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '80%',
        flexShrink: 0,
        textAlign: 'left',
    },
}));

export default function PermanentDrawerRight() {
    const classes = useStyles();

    const [Video, setVideo] = useState({
        currentSection: 1,
        currentChapter: 1,
        currentTopic: 1,
    });

    const [expanded, setExpanded] = useState(false);
    const [expandedChap, setExpandedChap] = useState(false);

    const handleChangeAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setExpandedChap(false);
   
    };

    const handleChangeAccordionChap = (chapter) => (eventChap, isExpandedChap) => {
        setExpandedChap(isExpandedChap ? chapter : false);
    };

    const setCurrentVideo = (Section, Chapter, Topic) => {
        setVideo({
            currentSection: Section,
            currentChapter: Chapter,
            currentTopic: Topic,
        })
    };



    return (
        <div>
            <div className={classes.root}>

                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Header bgColor='#63B995' />
                </AppBar>
                <main className={classes.content}>
                    {data.filter(id => id.ChapterNo === Video.currentChapter && id.SectionNo === Video.currentSection && id.TopicNo === Video.currentTopic).map((dataItem) => {
                        return (
                            <div style={{height:'100%'}}>
                            <ReactPlayer style={{paddingBottom:'0px'}}
                                url={dataItem.Video}
                                controls={true}
                                width="100%"
                                height="94%"                    
                            />
                            <center>
                            <Typography style={{fontWeight:'200',color:'white',paddingTop:'8px'}}>{dataItem.Topic}</Typography>  
                            </center>
                            </div>
                            
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
                    <div  style={{backgroundColor:'#2F9C95'}}>
                        <h1 style={{fontSize:'22px',paddingTop:'18px',textAlign:'center',color:'white'}}>Course Content</h1>
                    </div>
                    {SectionData.map((setionItem, sectionindex) => {
                        return (
                            <center>
                                <Accordion square={true} className="SectionTabBackground"  >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className={classes.heading} ><b>Section {sectionindex + 1}</b>  {setionItem.SectionName}</Typography>
                                    </AccordionSummary>
                                    {ChapterData.filter(id => id.SectionNo === (sectionindex + 1)).map((chapterItem, chapindex) => {
                                        return (
                                            <Accordion className="ChapterTabBackground" square={true} expanded={expandedChap === 'chapter' + (chapindex + 1)} onChange={handleChangeAccordionChap('chapter' + (chapindex + 1))}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography className={classes.heading}><b>Chapter {chapindex + 1} </b> {chapterItem.ChapterName}</Typography>
                                                </AccordionSummary>

                                                {data.filter(id => id.SectionNo === (sectionindex + 1) && id.ChapterNo === (chapindex + 1)).map((dataItem, dataindex) => {
                                                    return (
                                                        
                                                        <button className="VideoTabBackground" style={{width:'100%',padding:'10px',border: 'none'}} onClick={() => {
                                                            setCurrentVideo(dataItem.SectionNo,dataItem.ChapterNo,dataItem.TopicNo)
                                                        }}>
                                                            <Typography className={classes.heading} style={{marginLeft:'1%'}}><b>Topic {dataindex + 1} </b> &nbsp; {dataItem.Topic}</Typography>
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
