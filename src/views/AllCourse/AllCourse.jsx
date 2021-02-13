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

const Course = () => {
    return (
      <div style={{backgroundColor:'white' ,paddingBottom:'100px','background-image': 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}>
        <Header bgColor='#63B995'/>
        <div className="container-box">
          <Checkbox />
          <Divider style={{margin:'10px'}}/>
          <div>

          <Title name="คอร์สยอดฮิต"/> 
          <Topic marginBottom="20px" name="เรียนออนไลน์"/>
          <div className="row"> 
            {
              CourseData.filter(id => id.courseType === "online" && id.hot === "true").map(courseItem=>(
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" align="center">
                  <CardOnline 
                  key={courseItem.id}
                  coursename={courseItem.title}
                  category1={courseItem.category1}
                  category2={courseItem.category2}
                  people={courseItem.people}
                  time={courseItem.time}
                  rating={courseItem.rating} 
                  teacher= {courseItem.teacher}
                  img={courseItem.img}
                  hot={courseItem.hot}
                  />
                </div>
              ))
            }                  
          </div>
          <div class="button_slide slide_right">View More </div>  

          <Topic marginBottom="20px" marginTop="30px" name="เรียนในห้อง"/>
          <div className="row" style={{marginLeft:'1%'}}> 
            {
              CourseData.filter(id => id.courseType === "classroom" && id.hot === "true").map(courseItem=>(
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

          <Title name="Newest"/> 
          <Topic marginBottom="20px" name="เรียนออนไลน์"/>
          <div className="row"> 
            {
              CourseData.filter(id => id.courseType === "online" && id.new === "true").map(courseItem=>(
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
                  teacher= {courseItem.teacher}
                  img={courseItem.img}
                  hot={courseItem.hot}
                  new={courseItem.new}
                  />
                </div>
              ))
            }                    
          </div>
          <div class="button_slide slide_right">View More </div>  
          <Topic marginBottom="20px" marginTop="30px" name="เรียนในห้อง"/>
          <div className="row" style={{marginLeft:'1%'}}> 
            {
              CourseData.filter(id => id.courseType === "classroom" && id.new === "true").map(courseItem=>(
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

          <Title name="คอร์สทั้งหมด"/> 
          <Topic marginBottom="20px" name="เรียนออนไลน์"/>
          <div className="row"> 
            {
              CourseData.filter(id => id.courseType === "online" && id.hot !== "true").map(courseItem=>(
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
                  teacher= {courseItem.teacher}
                  img={courseItem.img}
                  hot={courseItem.hot}
                  new={courseItem.new}
                  />
                </div>
              ))
            }                    
          </div>
          <div class="button_slide slide_right">View More </div>  
          <Topic marginBottom="20px" marginTop="30px" name="เรียนในห้อง"/>
          <div className="row" style={{marginLeft:'1%'}}> 
            {
              CourseData.filter(id => id.courseType === "classroom" && id.hot !== "true").map(courseItem=>(
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
    );
  }

export default Course;
