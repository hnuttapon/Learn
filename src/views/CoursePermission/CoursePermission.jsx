import React from "react";
import Title from "../Course/CourseCard/Component/Title";
import Header from "../Header/Header";
import "./CoursePermission.css";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import Editor from "../AddCourse/Component/TextEditors";
import FileInput from "./Component/FileInput";

import {
    CCardBody,
    CCol,
    CFormGroup,
    CInput,
    CLabel,
    CCallout,
} from '@coreui/react'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: 'none',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const getSteps = () => {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}



const GetStepContent = (step) => {
    const [date, setDate] = React.useState({startDate: null, endDate: null})
    const [focused, setFocused] = React.useState()
    switch (step) {
        case 0:
            return (
            <div style={{ "font-family": "Kanit, sans-serif" }}>
                <CCardBody>
                    <CFormGroup row className="my-0">
                        <CCol xs="8">
                            <CFormGroup>
                                <CLabel><CCallout color="success"  >
                                    <h4 style={{ color: 'black' }}>ชื่อ-สกุล</h4>
                                </CCallout></CLabel>
                                <CInput id="name" placeholder="ชื่อ-สกุล" />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="4">
                            <CFormGroup>
                                <CLabel><CCallout color="success"  >
                                    <h4 style={{ color: 'black' }}>รหัสพนักงาน</h4>
                                </CCallout></CLabel>
                                <CInput id="city" placeholder="รหัสพนักงาน" />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="4">
                            <CFormGroup>
                                <CLabel><CCallout color="success"  >
                                    <h4 style={{ color: 'black' }}>บริษัท</h4>
                                </CCallout></CLabel>
                                <CInput id="city" placeholder="บริษัท" />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="4">
                            <CFormGroup>
                                <CLabel><CCallout color="success"  >
                                    <h4 style={{ color: 'black' }}>Department</h4>
                                </CCallout></CLabel>
                                <CInput id="city" placeholder="Department" />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="4">
                            <CFormGroup>
                                <CLabel><CCallout color="success"  >
                                    <h4 style={{ color: 'black' }}>Section</h4>
                                </CCallout></CLabel>
                                <CInput id="city" placeholder="Section" />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="8">
                            <CFormGroup>
                                <CLabel><CCallout color="success"  >
                                    <h4 style={{ color: 'black' }}>ตำแหน่ง</h4>
                                </CCallout></CLabel>
                                <CInput id="city" placeholder="ตำแหน่ง" />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="4">
                            <CFormGroup>
                                <CLabel><CCallout color="success"  >
                                    <h4 style={{ color: 'black' }}>ประเภทพนักงาน</h4>
                                </CCallout></CLabel>
                                <CInput id="city" placeholder="ประเภทพนักงาน" />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="8">
                            <CFormGroup>
                                <CLabel><CCallout color="success"  >
                                    <h4 style={{ color: 'black' }}>E-Mail</h4>
                                </CCallout></CLabel>
                                <CInput id="city" placeholder="E-Mail" />
                            </CFormGroup>
                        </CCol>
                        <CCol xs="4">
                            <CFormGroup>
                                <CLabel><CCallout color="success"  >
                                    <h4 style={{ color: 'black' }}>เบอร์โทรศัพท์</h4>
                                </CCallout></CLabel>
                                <CInput id="city" placeholder="เบอร์โทรศัพท์" />
                            </CFormGroup>
                        </CCol>
                    </CFormGroup>
                </CCardBody>
            </div>);
        case 1:
            return (<div style={{ "font-family": "Kanit, sans-serif" }}>
            <CCardBody>
                <CFormGroup row className="my-0">
                    <CCol xs="12">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>ชื่อหลักสูตรที่ขออบรม</h4>
                            </CCallout></CLabel>
                            <CInput id="name" placeholder="ชื่อ-สกุล" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>สถาบันที่จัด</h4>
                            </CCallout></CLabel>
                            <CInput id="city" placeholder="สถาบันที่จัด" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>สถานที่จัด</h4>
                            </CCallout></CLabel>
                            <CInput id="city" placeholder="สถานที่จัด" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="3">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>วันที่เรียน</h4>
                            </CCallout></CLabel>
                            
                            <DateRangePicker
                            startDate={date.startDate}
                            startDateId="startDate"
                            endDate={date.endDate}
                            endDateId="endDate"
                            onDatesChange={value => setDate(value)}
                            focusedInput={focused}
                            onFocusChange={focusedInput => setFocused(focusedInput)}
                            orientation="horizontal"
                            openDirection="down"
                            small="true"
                            />
                       
                        </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>จำนวนวันที่เรียน</h4>
                            </CCallout></CLabel>
                            <CInput id="city" placeholder="จำนวนวันที่เรียน" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>ค่าใช้จ่ายต่อคน</h4>
                            </CCallout></CLabel>
                            <CInput id="city" placeholder="ค่าใช้จ่ายต่อคน" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>การเดินทาง</h4>
                            </CCallout></CLabel>
                            <CInput id="city" placeholder="การเดินทาง" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
            </CCardBody>
        </div>);
        case 2:
            return (<div style={{ "font-family": "Kanit, sans-serif" }}>
            <CCardBody>
                <CFormGroup row className="my-0">
                    <CCol xs="12">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>รายละเอียดหลักสูตร</h4>
                            </CCallout></CLabel>
                            <Editor placeholder="รายละเอียดหลักสูตร" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="12">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>วัตถุประสงค์การอบรม</h4>
                            </CCallout></CLabel>
                            <Editor placeholder="วัตถุประสงค์การอบรม" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="12">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>วัตถุประสงค์การอบรม</h4>
                            </CCallout></CLabel>
                            <FileInput />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>ผู้อนุมัติเบื้องต้น</h4>
                            </CCallout></CLabel>
                            <CInput id="city" placeholder="ผู้อนุมัติเบื้องต้น" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel><CCallout color="success"  >
                                <h4 style={{ color: 'black' }}>ผู้อนุมัติสุดท้าย</h4>
                            </CCallout></CLabel>
                            <CInput id="city" placeholder="ผู้อนุมัติสุดท้าย" />
                        </CFormGroup>
                    </CCol>
                </CFormGroup>
            </CCardBody>
        </div>);
        default:
            return 'Unknown step';
    }
}

const CoursePermission = (props) => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    
    const steps = getSteps();

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };


    return (

        <div style={{ minHeight: '100%', "font-family": "Kanit, sans-serif",backgroundColor:'white' }}>
            <Header bgColor='#63B995' />
            <div className="topicBackground" style={{ backgroundColor: '#63B995' }}>
                <div className="container-xl" style={{ paddingBottom: '20px' }}>
                    <div className="titleBox" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '0px', width: '100%' }}>
                        <img style={{ width: '30px', height: '30px', display: 'inline', position: 'relative', top: '-7px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                        <Title name="ขออนุญาติอบรมนอกหลักสูตร" color="white" display="inline" marginLeft="2%" marginRight="2%" />
                        <img style={{ width: '30px', height: '30px', display: 'inline', position: 'relative', top: '-7px' }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDA2IiBjeT0iMTA3IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTQyMSA0MjJ2ODEuMjExbDgyLjIxMS04MS4yMTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyMCAyMDkuMDg5IDYyLjE3MiAxNjguMDg3LTM2Ljg3NCA3Ni44NDYtMjUuMjk4LTExLjc4OXY2OS43NjdoMjcxdi0xMjBoMTIxdi0zOTJoLTM5MnptMjA2LjYwNSAyMTcuMzA2LTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptMTIwLTkwLTIxLjIxMSAyMS4yMTEtMTkuMzk0LTE5LjM5NS0xOS4zOTUgMTkuMzk1LTIxLjIxMS0yMS4yMTEgMTkuMzk1LTE5LjM5NS0xOS4zOTUtMTkuMzk1IDIxLjIxMS0yMS4yMTEgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMTkuMzk1IDIxLjIxMSAyMS4yMTEtMTkuMzk1IDE5LjM5NXptLTIzMS4yMS0yMTguNzkgMjEuMjExLTIxLjIxMSAxOS4zOTQgMTkuMzk1IDE5LjM5NS0xOS4zOTUgMjEuMjExIDIxLjIxMS0xOS4zOTUgMTkuMzk1IDE5LjM5NSAxOS4zOTUtMjEuMjExIDIxLjIxMS0xOS4zOTUtMTkuMzk1LTE5LjM5NSAxOS4zOTUtMjEuMjExLTIxLjIxMSAxOS4zOTUtMTkuMzk1em0xMC42MDUgMTI0LjM5NWMxNy40NDEgMCAzMi40MjggMTAuMDc2IDM5Ljg5MyAyNC42MTkgNTkuMDctMTQuNjk0IDEwNS4wMzEtNjAuNjU2IDExOS43MjUtMTE5LjcyNS0xNC41NDItNy40NjYtMjQuNjE4LTIyLjQ1My0yNC42MTgtMzkuODk0IDAtMjQuODE0IDIwLjE4Ni00NSA0NS00NXM0NSAyMC4xODYgNDUgNDVjMCAyMS41NzctMTUuMjc1IDM5LjYyLTM1LjU3MiA0My45NjktMTYuNzMyIDcyLjM4Ny03My4wNzIgMTI4LjcyNy0xNDUuNDU5IDE0NS40NTktNC4zNDkgMjAuMjk3LTIyLjM5MiAzNS41NzItNDMuOTY5IDM1LjU3Mi0yNC44MTQgMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1IDQ1LTQ1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjI4NyIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvY2lyY2xlPjxwYXRoIGQ9Im0xMzAuNzk2IDQxNC4xNjMgMTcuOTMtMzguNDA4LTkyLjM0NC0yNTMuNzU1LTU2LjM4MiAyMC41MzcgOTIuMzQ0IDI1My43MTF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                    </div>
                </div>
            </div>
            <div className="IDPBox">
                <div className="container-xl">
                    <div className={classes.root}>
                        <Stepper nonLinear activeStep={activeStep}>
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepButton onClick={handleStep(index)} completed={completed[index]}>
                                        {label}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>
                        <div>
                            {allStepsCompleted() ? (
                                <div>
                                    <Typography className={classes.instructions}>
                                        All steps completed - you&apos;re finished
                                </Typography>
                                    <Button onClick={handleReset}>Reset</Button>
                                </div>
                            ) : (
                                    <div>
                                        <Typography className={classes.instructions}>{GetStepContent(activeStep)}</Typography>
                                        <div>
                                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                Back
                                </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                                className={classes.button}
                                            >
                                                Next
                                </Button>
                                            {activeStep !== steps.length &&
                                                (completed[activeStep] ? (
                                                    <Typography variant="caption" className={classes.completed}>
                                                        Step {activeStep + 1} already completed
                                                    </Typography>
                                                ) : (
                                                        <Button variant="contained" color="primary" onClick={handleComplete}>
                                                            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                                        </Button>
                                                    ))}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                </div>
            </div>
        </div>);
}

export default CoursePermission;
