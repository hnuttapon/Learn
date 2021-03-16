import React from "react";
import "./Header.css";

import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../actions';
import { useHistory } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const HeaderAdmin = (props) => {
  const FirstName = useSelector(state => state.Logged.FirstName)
  const LastName = useSelector(state => state.Logged.LastName)

  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: props.bgColor, minHeight: '60px', 'z-index': 1, paddingBottom: props.paddingBottom }}>
      <span style={{ zIndex: '1' }}>
        <h1 className="welcome">
          SCG E-learning
      </h1>
      </span>

      <span style={{ zIndex: '0' }}>
        <h1 className="name">
          {FirstName} {LastName}
        </h1>
      </span>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/#/ManagerDashboard">Dashboard</a>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">คอร์สเรียน</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#/AllCourse">คอร์สทั้งหมด</a>
              <a className="dropdown-item" href="/#/CoursePermission">ขออนุญาติอบรมนอกหลักสูตร</a>
              <a className="dropdown-item" href="/#/MyHistory">ประวัติการเรียน</a>
            </div>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">Dialogue</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#/Dialogue/Boss">Dialogue</a>
              <a className="dropdown-item" href="/#/Dialogue/Summary">Summary</a>
            </div>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">เพิ่มหลักสูตร</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#/AddCourseOnline">หลักสูตร Online</a>
              <a className="dropdown-item" href="/#/AddCourseClass">หลักสูตร Classroom</a>
            </div>
          </li>
          <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">ผู้สอน</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#/Teacher">ผู้สอน</a>
              <a className="dropdown-item" href="/#/AddTeacher">เพิ่มผู้สอน</a>
            </div>
          </li>
        </ul>

        <div class="btn-group dropleft">
          <a className="profile dropdown-toggle" data-toggle="dropdown">
            <AccountCircleIcon style={{ fontSize: '40px', color: 'white', borderRadius: '10px' }} />
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/#/IDP">My Individual Development Plan</a>
            <a className="dropdown-item" href="/#/AnnualCourse">My Annual Course Plan</a>
            <button onClick={handleLogout} className="logout">
              <span style={{ display: 'inline', color: 'white', marginLeft: '5px', fontWeight: '100' }}><h5 style={{ display: 'inline', fontWeight: '500', color: 'white' }}>Log Out</h5></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderAdmin;






