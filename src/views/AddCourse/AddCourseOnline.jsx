import React from "react";
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
import TimePicker from "./Component/timepicker";

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const AddCourseOnline = () => {
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

                </div>
            </div>

        </div>);
}

export default AddCourseOnline;
