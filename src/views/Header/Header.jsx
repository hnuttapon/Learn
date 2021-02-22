import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    // background: 'linear-gradient(45deg, #0B7189 5%, #7BE495 60% , #329D9C 75%)'
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: props.bgColor, minHeight: '60px','z-index':1,paddingBottom:props.paddingBottom }}>
      <h1 style={{
        color: 'white',
        'font-family': 'Kanit, sans-serif',
        'font-weight': '500',
        'font-size': '25px',
      }}>
        {/* <MenuBookIcon /> */}
        &nbsp;
        SCG E-Learning
      </h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/#/AllCourse">All Course</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/#/MyCourse">คอร์สของฉัน</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/#/Dialogue">Dialogue</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/#/dashboard">Dashboard</a>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">เพิ่มหลักสูตรใหม่</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#/AddCourseOnline">Online</a>
              <a className="dropdown-item" href="/#/AddCourseClass">Classroom</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;






