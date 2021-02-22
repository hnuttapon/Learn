import React from 'react';
import "../Event.css";

const EventCard = (props) => {

    return (
        <div style={{width:'90%',textAlign:'left'}}>
            <div className="yl-event-innerbox yl-headline">
                <div className="yl-event-img">
                    <img src="assets/img/event/ev9.jpg" alt="" />
                </div>
                <div className="yl-event-text position-relative">
                    <div className="event-date text-center">
                        09
                        <span>dec</span>
                    </div>
                    <h3>How to prepare yourself for next job</h3>
                    <div className="yl-event-meta">
                        <i className="fas fa-map-marker-alt"></i>&nbsp; Florida University &nbsp;
                        <i className="far fa-clock"></i>&nbsp; 10.00am - 12.00pm
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;