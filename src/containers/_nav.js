import React from 'react';
import CIcon from '@coreui/icons-react';
import {freeSet} from '@coreui/icons';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'success',
      text: 'User',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/ManagerDashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'danger',
      text: 'Manager',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Course',
    to: '/MyCourse',
    icon: <MenuBookIcon className="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Team',
    to: '/MyTeam',
    icon: <MenuBookIcon className="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'All Course',
    to: '/AllCourse',
    icon: <MenuBookIcon className="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Add Course Class',
    to: '/AddCourseClass',
    icon: <MenuBookIcon className="c-sidebar-nav-icon"/>,
  },
]

export default _nav
