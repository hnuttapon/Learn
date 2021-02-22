import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from "../../Course/CourseCard/Component/avatar";
import '../Teacher.css';

import { CProgress, CCallout } from '@coreui/react'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        textAlign: 'center',
        borderRadius: '2px',
        paddingTop: '35px',
        position: 'relative',
        top: '-50px',
        'z-index': '0',
        // 'box-shadow': '0 1px 8px grey',
    },
    infoCard: {
        maxWidth: 345,
        textAlign: 'center',
        borderRadius: '2px',
        paddingTop: '3px',
        minHeight: '290px',
        textAlign: 'left',
        'z-index': '0',
        transition: ' all 0.5s ease-out',
    }
});

const TeacherCard = (props) => {
    const classes = useStyles();
    const [isHover, setIsHover] = useState(false);

    return (
        <div >
            <center>
                <div className={classes.avatar}>
                    <Avatar width='150px' height="150px" zIndex="1" img={props.img} />
                </div>
            </center>
            <Card className="root">
                <CardContent>
                    <h4>{props.name}</h4>
                    <h5>Position : {props.position}</h5>
                    <h5 style={{ color: 'grey' }}>Courses : {props.course}</h5>
                </CardContent>
            </Card>
        </div>

    );
}

export default TeacherCard;