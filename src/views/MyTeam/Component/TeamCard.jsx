import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from "../../Course/CourseCard/Component/avatar";
import Divider from '@material-ui/core/Divider';
import '../MyTeam.css';

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
        transition:' all 0.5s ease-out',
    }
});

const TeamCard = (props) => {
    const classes = useStyles();
    const [isHover, setIsHover] = useState(false);



    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {
                isHover == false && (
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
                                <h5 style={{ color: 'grey' }}>Department : {props.department}</h5>
                            </CardContent>
                        </Card>
                    </div>
                )
            }
            {
                isHover && (
                    <div >
                        <Card className="infoCard fade-in">
                            <CardContent>
                                <CCallout color="warning" style={{marginTop:'0px',marginBottom:'10px'}}>
                                    <h4 style={{ color: '#476A6F' }}>Information</h4>
                                </CCallout>
                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline', color: 'grey' }}>PL </h5>
                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline-block' }}>: {props.position}</h5>

                                <div style={{ display: 'block' }} />

                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline', color: 'grey' }}>Dialogue </h5>
                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline-block' }}>: {props.position}</h5>

                                <div style={{ display: 'block' }} />

                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline', color: 'grey' }}>IDPs </h5>
                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline-block' }}>: {props.position}</h5>

                                <div className="progress-group ">
                                    <div className="progress-group-header">
                                        <span className="title" style={{ fontSize: '18px', fontWeight: '400', color: 'grey' }}>Mandatory %</span>
                                        <span className="ml-auto font-weight-bold">67% </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="success" value="67" />
                                    </div>
                                </div>
                                <div className="progress-group">
                                    <div className="progress-group-header">
                                        <span className="title" style={{ fontSize: '18px', fontWeight: '400', color: 'grey' }}>IDP %</span>
                                        <span className="ml-auto font-weight-bold">67% </span>
                                    </div>
                                    <div className="progress-group-bars">
                                        <CProgress className="progress-xs" color="success" value="67" />
                                    </div>
                                </div>

                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline', color: 'grey'}}>E-Learning Man Hours </h5>
                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline-block' }}>: 45</h5>

                                <div style={{ display: 'block' }} />

                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline', color: 'grey' }}>Other Man Hours </h5>
                                <h5 style={{ fontSize: '18px', fontWeight: '400', display: 'inline-block' }}>: 123</h5>
                            </CardContent>
                        </Card>
                    </div>
                )
            }
        </div>
    );
}

export default TeamCard;