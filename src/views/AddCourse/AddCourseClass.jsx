import React from "react";
import Topic from "../Course/CourseCard/Component/Topic";
import Title from "../Course/CourseCard/Component/Title";
// import Dropdown from "../../components/dropdown";
// import CourseType from "../../components/CourseType";
import Editor from "./Component/TextEditors";
// import './AddCourse.css';



function AddCourse() {
    return (
    <div>
      {/* <center><CourseType label="ห้องเรียน" firstchoice="ออนไลน์" secondchoice="ห้องเรียน"/></center> */}
      <Title name="เพิ่มหลักสูตรใหม่ (Classroom)"/> 
      <Topic name="ชื่อหลักสูตร"/>
      <Editor placeholder="ชื่อหลักสูตร"/>
      <Topic name="รายละเอียดหลักสูตร"/>
      <Editor placeholder="รายละเอียดหลักสูตร"/>
      <Topic name="เค้าโครงหลักสูตร"/>
      <Editor placeholder="เค้าโครงหลักสูตร"/>
      <Topic name="หลักสูตรนี้เหมาะสมกับ"/>
      <Editor placeholder="หลักสูตรนี้เหมาะสมกับ"/>
      <Topic name="ข้อมูลเพิ่มเติมหลักสูตร"/>
      <Dropdown label="ภาษา" firstchoice="ไทย" secondchoice="อังกฤษ"/>
      
      <Topic name="หมายเหตุ"/>
      <Editor placeholder="หมายเหตุ"/>
      <Topic name="ภาพประกอบหลักสูตร"/>

    </div>);
  }

export default AddCourse;
