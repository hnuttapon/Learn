import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));
const CourseDescription = React.lazy(() => import('./views/MyCourse/MyCourse'));
const AllCourse = React.lazy(() => import('./views/AllCourse/AllCourse'));
const MyTeam = React.lazy(() => import('./views/MyTeam/MyTeam'));
const AddCourseClass = React.lazy(() => import('./views/AddCourse/AddCourseClass'));
const AddCourseOnline = React.lazy(() => import('./views/AddCourse/AddCourseOnline'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/dashboard" name="Home" render={props => <TheLayout {...props}/>} />
            <Route path="/ManagerDashboard" name="Home" render={props => <TheLayout {...props}/>} />
            <Route path="/MyCourse" component={CourseDescription} />
            <Route path="/AllCourse" component={AllCourse} />
            <Route path="/MyTeam" component={MyTeam} />
            <Route path="/AddCourseClass" component={AddCourseClass} />
            <Route path="/AddCourseOnline" component={AddCourseOnline} />
            {/* <Route component={NoPageFound} /> */}
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
