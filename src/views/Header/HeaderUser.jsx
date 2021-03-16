import React from "react";
import "./Header.css";

import {useSelector,useDispatch} from "react-redux";
import {logout} from '../../actions';
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
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">ผู้สอน</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#/Teacher">ผู้สอน</a>
            </div>
          </li>
        </ul>

        <div class="btn-group dropleft">
        <a className="profile dropdown-toggle" data-toggle="dropdown">
              <AccountCircleIcon style={{fontSize:'40px',color:'white',borderRadius:'10px'}}/>
              {/* <img style={{backgroundColor:'black',borderRadius:'50%'}} width="40px" height="40px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwYy02Mi43MzcsMC0xMTMuNzc4LDU0LjIyMy0xMTMuNzc4LDEyMC44NzJTMTkzLjI2MywyNDEuNzQ0LDI1NiwyNDEuNzQ0czExMy43NzgtNTQuMjIzLDExMy43NzgtMTIwLjg3MiAgICBTMzE4LjczNywwLDI1NiwweiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDI2OS43ODZjLTExNi4xMzEsMC0yMTAuNjEsOTQuNDc5LTIxMC42MSwyMTAuNjFWNTEyaDQyMS4yMnYtMzEuNjAzQzQ2Ni42MSwzNjQuMjY2LDM3Mi4xMzEsMjY5Ljc4NiwyNTYsMjY5Ljc4NnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" /> */}
              {/* <img width="30px" height="30px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiA5NC40NTcwMzFjLTQ5LjIzODI4MSAwLTg5LjMwMDc4MSA0MC4wNTg1OTQtODkuMzAwNzgxIDg5LjMwMDc4MSAwIDQ5LjIzODI4MiA0MC4wNjI1IDg5LjI5Njg3NiA4OS4zMDA3ODEgODkuMjk2ODc2czg5LjMwMDc4MS00MC4wNTg1OTQgODkuMzAwNzgxLTg5LjI5Njg3NmMwLTQ5LjI0MjE4Ny00MC4wNjI1LTg5LjMwMDc4MS04OS4zMDA3ODEtODkuMzAwNzgxem0wIDAiIGZpbGw9IiNjNDI4NDciIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYgMGMtMTQxLjE2MDE1NiAwLTI1NiAxMTQuODM5ODQ0LTI1NiAyNTYgMCA2NS4zMTI1IDI0LjU5NzY1NiAxMjQuOTc2NTYyIDY0Ljk5NjA5NCAxNzAuMjUzOTA2IDguNjUyMzQ0LTM3Ljk5MjE4NyAyOC41MDc4MTItNzIuNjU2MjUgNTcuNS05OS42NjAxNTYgMjAuMzQ3NjU2LTE4Ljk1MzEyNSA0NC4xNTYyNS0zMy4xMzY3MTkgNjkuODkwNjI1LTQxLjk1NzAzMS0zMy40Mzc1LTIxLjE2MDE1Ny01NS42ODc1LTU4LjQ2ODc1LTU1LjY4NzUtMTAwLjg3ODkwNyAwLTY1Ljc4NTE1NiA1My41MTk1MzEtMTE5LjMwMDc4MSAxMTkuMzAwNzgxLTExOS4zMDA3ODFzMTE5LjI5Njg3NSA1My41MTU2MjUgMTE5LjI5Njg3NSAxMTkuMzAwNzgxYzAgNDIuMzkwNjI2LTIyLjIzMDQ2OSA3OS42ODc1LTU1LjY0NDUzMSAxMDAuODUxNTYzIDI3Ljg3NSA5LjU0Njg3NSA1My40MjU3ODEgMjUuMzk4NDM3IDc0Ljg3NSA0Ni44NDc2NTYgMjYuMjA3MDMxIDI2LjIwNzAzMSA0NC4zMDA3ODEgNTkuMTQ4NDM4IDUyLjQ1NzAzMSA5NC44MTI1IDQwLjQxNDA2My00NS4yNzczNDMgNjUuMDE1NjI1LTEwNC45NDkyMTkgNjUuMDE1NjI1LTE3MC4yNjk1MzEgMC0xNDEuMTYwMTU2LTExNC44Mzk4NDQtMjU2LTI1Ni0yNTZ6bTAgMCIgZmlsbD0iI2M0Mjg0NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTkxLjEwMTU2MiA0NTEuNjQ4NDM4YzQ0LjU3ODEyNiAzNy42MzI4MTIgMTAyLjEyODkwNyA2MC4zNTE1NjIgMTY0Ljg5ODQzOCA2MC4zNTE1NjJzMTIwLjMyMDMxMi0yMi43MjI2NTYgMTY0Ljg5ODQzOC02MC4zNTE1NjJjLTQuMTA1NDY5LTM3LjI5Njg3Ni0yMC44NjcxODgtNzIuMjYxNzE5LTQ3LjU4MjAzMi05OC45NzY1NjMtMzEuMzQzNzUtMzEuMzQzNzUtNzMuMDA3ODEyLTQ4LjYwNTQ2OS0xMTcuMzE2NDA2LTQ4LjYwNTQ2OS04NC4zOTA2MjUgMC0xNTUuNzM4MjgxIDY0LjM3ODkwNi0xNjQuODk4NDM4IDE0Ny41ODIwMzJ6bTAgMCIgZmlsbD0iI2M0Mjg0NyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" /> */}
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






