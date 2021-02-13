import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    // background: 'linear-gradient(45deg, #0B7189 5%, #7BE495 60% , #329D9C 75%)'
    <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:props.bgColor ,minHeight:'60px'}}>
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
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a className="nav-link" href="/#/AllCourse">All Course</a>
          </li>
          <li class="nav-item active">
            <a className="nav-link" href="/AddCourse">เพิ่มหลักสูตรใหม่</a> 
          </li>
          <li class="nav-item active">
            <a className="nav-link" href="/#/MyCourse">คอร์สของฉัน</a>
          </li>
          <li class="nav-item active">
            <a className="nav-link" href="/#/Dialogue">Dialogue</a>
          </li>
          <li class="nav-item active">
            <a className="nav-link" href="/#/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;






