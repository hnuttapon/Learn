import React from "react";
import Topic from "../Course/CourseCard/Component/Topic";
import Title from "../Course/CourseCard/Component/Title";
import { makeStyles } from "@material-ui/core/styles";
import "./MyCourse.css";
import Button from "@material-ui/core/Button";
import AlarmIcon from "@material-ui/icons/Alarm";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Avatar from "../Course/CourseCard/Component/avatar";
import SimpleAccordion from "../Course/CourseCard/Component/Accordion";
import CardOnline from "../Course/CourseCard/CardOnline";
import CourseData from "../Course/CourseData/CourseData";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  detailFont: {
    color: "white",
    "font-family": "Kanit, sans-serif",
    fontWeight: "450",
    fontSize: "20px",
    marginTop: "20px",
    position: "relative",
    top: "12px",
  },
  sectionButton: {
    "font-family": "Kanit, sans-serif",
    color: "white",
    fontSize: "20px",
    fontWeight: "500",
    width: "95%",
    textDecoration: "none",
  },
}));

const MyCourse = (props) => {
  const classes = useStyles();
  return (
    <div style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}>
      <Header bgColor='#63B995'/>
      <div>
        <div className="container">
          <div className="row margin5">
            <div
              className="col-xl-8 col-lg-8 col-md-8 col-sm-12"
              style={{ paddingRight: "0%", paddingLeft: "0%" }}
            >
              <img
                alt="Online"
                className="courseImg"
                src={
                  "https://image.freepik.com/free-vector/gradient-geometric-background_52683-54352.jpg"
                }
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 courseDetail">
              <h2
                style={{
                  color: "#235789",
                  "font-family": "Kanit, sans-serif",
                  fontWeight: "450",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                Online
              </h2>
              <Topic
                name="Storytelling for Project Pitching"
                fontSize="30px"
                color="black"
                fontWeight="500"
              />
              <h2
                style={{
                  color: "black",
                  "font-family": "Kanit, sans-serif",
                  fontWeight: "300",
                  fontSize: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Pitch งานเข้าเป้า แค่เล่าเรื่องเป็น
              </h2>
              <Topic
                name="4,990.00 บาท"
                marginLeft="0.1%"
                fontSize="30px"
                color="black"
                fontWeight="500"
              />
              <center>
                <Button
                  variant="contained"
                  className="registerButton"
                  href="/BuyCourseClass"
                >
                  สมัครเรียนเลย
                </Button>
                <Button
                  variant="outlined"
                  className="exampleButton"
                  href="#contained-buttons"
                >
                  ดูตัวอย่างบทเรียน
                </Button>
              </center>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row margin5">
          <div
            className="col-xl-4 col-lg-4 col-md-2 col-sm-3"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              height: "90px",
              backgroundColor: "#63B995",
              paddingLeft: "3%",
              paddingRight: "0px",
              textAlign: "left ",
            }}
          >
            <h2 className={classes.detailFont}>
              <AlarmIcon style={{ position: "relative", top: "-2px" }} /> &nbsp;
              20 ชั่วโมง
            </h2>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-5 col-sm-4"
            style={{
              backgroundColor: "#63B995",
              "vertical-align": "middle",
              paddingLeft: "2%",
              paddingRight: "0px",
              textAlign: "center",
            }}
          >
            <h2 className={classes.detailFont}>
              <MenuBookIcon style={{ position: "relative", top: "-2px" }} />{" "}
              &nbsp; ไม่จำเป็นต้องมีพื้นฐาน
            </h2>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-5 col-sm-5"
            style={{
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              backgroundColor: "#63B995",
              paddingLeft: "2%",
              paddingRight: "0px",
              textAlign: "center",
            }}
          >
            <h2 className={classes.detailFont}>
              <LoyaltyIcon style={{ position: "relative", top: "-2px" }} />{" "}
              &nbsp; เรียนจบรับประกาศนียบัตร
            </h2>
          </div>
        </div>
      </div>

      {/* <div className="box">
          
            <Button variant="contained" className={classes.sectionButton} style={{background: '#E0DFD5',color:'black', borderRadius: "0px"}} href="#contained-buttons">
              รายละเอียด
            </Button>
            <Button variant="contained" className={classes.sectionButton} style={{background: '#EAEBED',color:'black', borderRadius: "0px"}} href="#contained-buttons">
              เนื้อหาคอร์ส
            </Button>
            <Button variant="contained" className={classes.sectionButton} style={{background: '#DCDCDD',color:'black', borderRadius: "0px", borderBottomLeftRadius:"10px", borderBottomRightRadius:'10px'}} href="#contained-buttons">
              ผู้สอน
            </Button>
          
      </div> */}

      <div className="container">
        <div className="row margin5">
          <div
            className="col-xl-8"
            style={{
              borderRadius: "10px",
              minHeight: "400px",
              marginTop: "20px",
              marginLeft: "0px",
              paddingLeft: "0px",
              backgroundColor: "white",
            }}
          >
            <Topic
              name="รายละเอียด"
              marginLeft="2%"
              marginTop="2%"
              fontSize="30px"
              color="black"
              fontWeight="400"
              paddingTop="2%"
            />
            <h2
              style={{
                color: "#0C7C59",
                "font-family": "Kanit, sans-serif",
                fontWeight: "400",
                fontSize: "20px",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "2%",
              }}
            >
              Storytelling มีความสำคัญกับการ Pitch Project อย่างไร?
            </h2>
            <h2
              style={{
                color: "black",
                "font-family": "Kanit, sans-serif",
                fontWeight: "300",
                fontSize: "20px",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "2%",
                textAlign: "justify",
              }}
            >
              ในการนำเสนองาน หรือการสร้าง Product ใหม่ๆ เราอาจต้องมีการ Present
              หรือ Pitch งานให้กับคนกลุ่มต่างๆ ไม่ว่าจะเป็นหัวหน้า ลูกค้า
              ทีมอื่นๆ หรือนักลงทุน การเล่าเรื่อง หรือ Storytelling
              จึงเป็นหนึ่งในวิธียอดฮิต ที่คนนำมาใช้ในการนำเสนอผลงานของตัวเอง
              ให้ออกมาน่าสนใจ ผู้ฟังจำได้ และเชื่อในสิ่งที่เรากำลังนำเสนอ
            </h2>
            <h2
              style={{
                color: "#0C7C59",
                "font-family": "Kanit, sans-serif",
                fontWeight: "400",
                fontSize: "20px",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "2%",
              }}
            >
              คอร์สออนไลน์ Storytelling for Project Pitching
            </h2>
            <h2
              style={{
                color: "black",
                "font-family": "Kanit, sans-serif",
                fontWeight: "300",
                fontSize: "20px",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "2%",
                textAlign: "justify",
              }}
            >
              ในคอร์สนี้ คุณจะได้เรียนรู้วิธีสร้าง Pitch ที่เป็นมากกว่าการ
              Present ทั่วไป ได้เรียนรู้ Framework ต่างๆ
              ที่จะช่วยให้คุณสามารถร้อยเรียงเรื่องราว
              และสร้างวิธีการนำเสนอที่แปลกใหม่ ผ่านกระบวนการ 5 ขั้นตอน
              ที่เข้าใจง่าย และสามารถนำไปใช้ได้จริง
            </h2>
          </div>

          <div className="col-xl-4" align="center">
            <div className="box">
              <Button variant="contained" className={classes.sectionButton} style={{ background: '#E0DFD5', color: 'black', borderRadius: "0px" }} href="#contained-buttons">
                รายละเอียด
          </Button>
              <Button variant="contained" className={classes.sectionButton} style={{ background: '#EAEBED', color: 'black', borderRadius: "0px" }} href="#contained-buttons">
                เนื้อหาคอร์ส
          </Button>
              <Button variant="contained" className={classes.sectionButton} style={{ background: '#DCDCDD', color: 'black', borderRadius: "0px", borderBottomLeftRadius: "10px", borderBottomRightRadius: '10px' }} href="#contained-buttons">
                ผู้สอน
          </Button>

            </div>
          </div>
        </div>

      </div>

      <div className="container">
        <div className="row margin5">
          <div
            className="col-xl-8"
            style={{
              borderRadius: "10px",
              minHeight: "220px",
              marginTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "0px",
              paddingRight: "0px",
              backgroundColor: "white",
            }}
          >
            <Topic
              name="เนื้อหาคอร์ส"
              marginLeft="2%"
              marginTop="2%"
              fontSize="30px"
              color="black"
              fontWeight="400"
              paddingTop="2%"
            />
            <div className="margin5" style={{ width: "93%" }}>
              <center>
                <SimpleAccordion
                  title="01 Introduction"
                  topic="Instructor Introduction"
                  time="8:54"
                  backgroundColor="#DEF2C8"
                />
                <SimpleAccordion
                  title="02 Think"
                  topic="Instructor Introduction"
                  time="8:54"
                  backgroundColor="#C5DAC1"
                />
                <SimpleAccordion
                  title="03 Prepare"
                  topic="Instructor Introduction"
                  time="8:54"
                  backgroundColor="#DEF2C8"
                />
                <SimpleAccordion
                  title="04 Seasoning"
                  topic="Instructor Introduction"
                  time="8:54"
                  backgroundColor="#C5DAC1"
                />
                <SimpleAccordion
                  title="05 Cook"
                  topic="Instructor Introduction"
                  time="8:54"
                  backgroundColor="#DEF2C8"
                />
                <SimpleAccordion
                  title="06 serve"
                  topic="Instructor Introduction"
                  time="8:54"
                  backgroundColor="#C5DAC1"
                />
              </center>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '25px' }}>
        <div className="row margin5">
          <div
            className="col-xl-8"
            style={{
              borderRadius: "10px",
              minHeight: "220px",
              marginTop: "20px",
              paddingLeft: "0px",
              backgroundColor: "white",
            }}
          >
            <Topic
              name="ผู้สอน"
              marginLeft="2%"
              marginTop="2%"
              fontSize="30px"
              color="black"
              fontWeight="400"
              paddingTop="2%"
            />
            <div className="row">
              <div className="col-xl-3">
                <Avatar width="100px" height="100px" marginLeft="50px" />
              </div>
              <div className="col-xl-9">
                <h2
                  style={{
                    color: "#0C7C59",
                    "font-family": "Kanit, sans-serif",
                    fontWeight: "400",
                    fontSize: "20px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    marginLeft: "2%",
                    marginTop: "3%",
                  }}
                >
                  พิริยะ กุลกาญจนาชีวิน
                </h2>
                <h2
                  style={{
                    color: "black",
                    "font-family": "Kanit, sans-serif",
                    fontWeight: "300",
                    fontSize: "20px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    marginLeft: "2%",
                    textAlign: "justify",
                  }}
                >
                  Co-Founder & Story curator at Glow Story
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
