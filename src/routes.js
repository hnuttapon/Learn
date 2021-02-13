import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const CourseDescription = React.lazy(() => import('./views/MyCourse/MyCourse'))
const ManagerDashboard = React.lazy(() => import('./views/ManagerDashboard/ManagerDashboard'))
const MyTeam = React.lazy(() => import('./views/MyTeam/MyTeam'))
const AllCourse = React.lazy(() => import('./views/AllCourse/AllCourse'))
// const AddCourseClass = React.lazy(() => import('./views/AddCourse/AddCourseClass'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/ManagerDashboard', name: 'ManagerDashboard', component: ManagerDashboard },
  { path: '/MyCourse', name: 'My Course', component: CourseDescription },
  { path: '/MyTeam', name: 'ManagerDashboard', component: MyTeam },
  { path: '/AllCourse', name: 'All Course', component: AllCourse },
  // { path: '/AddCourseClass', name: 'AddCourseClass', component: AddCourseClass },
]

export default routes
