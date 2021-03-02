import React from "react";
import Topic from "../Course/CourseCard/Component/Topic";
import Title from "../Course/CourseCard/Component/Title";
import CardOnline from "../Course/CourseCard/CardOnline";
import CardClass from "../Course/CourseCard/CardClass";
import './AllCourse.css';
import Checkbox from "./CheckboxFilter";
import { Divider } from "@material-ui/core";
import CourseData from "../Course/CourseData/CourseData";
import Header from "../Header/Header";
import Form from "./Component/Form";

import { CCallout } from '@coreui/react';

const Course = () => {
  return (
    <div>
      <Header bgColor='#63B995' />
      <div className="topicBackground" style={{ backgroundColor: '#63B995' }}>
        <div className="container-xl" style={{ paddingBottom: '20px' }}>
          <div className="titleBox" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '0px', width: '40%' }}>
            <center><Form placeholder="Search" /></center>
          </div>
        </div>
      </div>
      <div className="IDPBox">
        <div className="container-box">
          <Checkbox />
          <Divider style={{ margin: '10px' ,backgroundColor:'#CCDAD1'}} />
          <div>
            
            <CCallout color="warning" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%',clear:'both' }}>
              <h2 style={{ color: 'black', fontWeight: '600', "font-family": "Kanit, sans-serif" }}>คอร์สยอดฮิต</h2>
            </CCallout>
            <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%',clear:'both' }}>
              <h3 style={{ color: 'black', fontWeight: '400', "font-family": "Kanit, sans-serif" }}>เรียนออนไลน์</h3>
            </CCallout>

            <div className="row">
              {
                CourseData.filter(id => id.courseType === "online" && id.hot === "true").map(courseItem => (
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" align="center">
                    <CardOnline
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
                  </div>
                ))
              }
            </div>
            <div class="button_slide slide_right">View More </div>

            <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%',clear:'both' }}>
              <h3 style={{ color: 'black', fontWeight: '400', "font-family": "Kanit, sans-serif" }}>เรียนในห้อง</h3>
            </CCallout>
            <div className="row" style={{ marginLeft: '1%' }}>
              {
                CourseData.filter(id => id.courseType === "classroom" && id.hot === "true").map(courseItem => (
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" align="center">
                    <CardClass
                      key={courseItem.id}
                      coursename={courseItem.title}
                      season={courseItem.season}
                      category1={courseItem.category1}
                      category2={courseItem.category2}
                      time={courseItem.time}
                      rating={courseItem.rating}
                      duration={courseItem.duration}
                      place={courseItem.place}
                      img={courseItem.img}
                      hot={courseItem.hot}
                    />
                  </div>
                ))
              }
            </div>
            <div class="button_slide slide_right">View More </div>

            <CCallout color="warning" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%',clear:'both' }}>
              <h2 style={{ color: 'black', fontWeight: '600', "font-family": "Kanit, sans-serif" }}>Newest</h2>
            </CCallout>
            <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%',clear:'both' }}>
              <h3 style={{ color: 'black', fontWeight: '400', "font-family": "Kanit, sans-serif" }}>เรียนออนไลน์</h3>
            </CCallout>
            <div className="row">
              {
                CourseData.filter(id => id.courseType === "online" && id.new === "true").map(courseItem => (
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" align="center">
                    <CardOnline
                      index={courseItem.id}
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
                      new={courseItem.new}
                    />
                  </div>
                ))
              }
            </div>
            <div class="button_slide slide_right">View More </div>

            <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%',clear:'both' }}>
              <h3 style={{ color: 'black', fontWeight: '400', "font-family": "Kanit, sans-serif" }}>เรียนในห้อง</h3>
            </CCallout>
            <div className="row" style={{ marginLeft: '1%' }}>
              {
                CourseData.filter(id => id.courseType === "classroom" && id.new === "true").map(courseItem => (
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" align="center">
                    <CardClass
                      index={courseItem.id}
                      key={courseItem.id}
                      coursename={courseItem.title}
                      season={courseItem.season}
                      category1={courseItem.category1}
                      category2={courseItem.category2}
                      time={courseItem.time}
                      rating={courseItem.rating}
                      duration={courseItem.duration}
                      place={courseItem.place}
                      img={courseItem.img}
                      hot={courseItem.hot}
                      new={courseItem.new}
                    />
                  </div>
                ))
              }
            </div>
            <div class="button_slide slide_right">View More </div>

            <CCallout color="warning" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%',clear:'both' }}>
              <h2 style={{ color: 'black', fontWeight: '600', "font-family": "Kanit, sans-serif" }}>คอร์สทั้งหมด</h2>
            </CCallout>
            <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%',clear:'both' }}>
              <h3 style={{ color: 'black', fontWeight: '400', "font-family": "Kanit, sans-serif" }}>เรียนออนไลน์</h3>
            </CCallout>
            <div className="row">
              {
                CourseData.filter(id => id.courseType === "online" && id.hot !== "true").map(courseItem => (
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" align="center">
                    <CardOnline
                      index={courseItem.id}
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
                      new={courseItem.new}
                    />
                  </div>
                ))
              }
            </div>
            <div class="button_slide slide_right">View More </div>

            <CCallout color="success" style={{ marginBottom: '0px', marginTop: '30px', marginLeft: '4%',clear:'both' }}>
              <h3 style={{ color: 'black', fontWeight: '400', "font-family": "Kanit, sans-serif" }}>เรียนในห้อง</h3>
            </CCallout>
            <div className="row" style={{ marginLeft: '1%' }}>
              {
                CourseData.filter(id => id.courseType === "classroom" && id.hot !== "true").map(courseItem => (
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" align="center">
                    <CardClass
                      index={courseItem.id}
                      key={courseItem.id}
                      coursename={courseItem.title}
                      season={courseItem.season}
                      category1={courseItem.category1}
                      category2={courseItem.category2}
                      time={courseItem.time}
                      rating={courseItem.rating}
                      duration={courseItem.duration}
                      place={courseItem.place}
                      img={courseItem.img}
                      hot={courseItem.hot}
                      new={courseItem.new}
                    />
                  </div>
                ))
              }
            </div>
            <div class="button_slide slide_right">View More </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
