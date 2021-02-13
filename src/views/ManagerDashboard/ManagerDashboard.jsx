import React, { lazy } from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import GaugeChart from 'react-gauge-chart'
import CourseData from "../Course/CourseData/CourseData";
import CardBrief from "../Course/CourseCard/CardBrief";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import {
    CBadge,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CListGroup,
    CListGroupItem,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CCallout
} from '@coreui/react'

import {
    CChartBar,
    CChartLine,
    CChartDoughnut,
    CChartRadar,
    CChartPie,
    CChartPolarArea
} from '@coreui/react-chartjs'
import { CIcon } from '@coreui/icons-react';

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginLeft:'10px',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 520,
        height: 530,
    },
}));

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

const Dashboard = () => {
    const classes = useStyles();
    return (
        <>
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
        </>
    )
}

export default Dashboard
