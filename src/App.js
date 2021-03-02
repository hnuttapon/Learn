import React from 'react';
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
const Teacher = React.lazy(() => import('./views/Teacher/Teacher'));
const AddTeacher = React.lazy(() => import('./views/AddTeacher/AddTeacher'));
const DialogueUser = React.lazy(() => import('./views/DialogueUser/DialogueUser'));
const DialogueBoss = React.lazy(() => import('./views/DialogueBoss/DialogueBoss'));
const DialogueSummary = React.lazy(() => import('./views/DialogueSummary/DialogueSummary'));
const TeacherInfo = React.lazy(() => import('./views/TeacherInfo/TeacherInfo'));
const OnlineLearning = React.lazy(() => import('./views/OnlineLearning/OnlineLearning'));
const Event = React.lazy(() => import('./views/Event/Event'));
const CoursePermission = React.lazy(() => import('./views/CoursePermission/CoursePermission'));
const MyHistory = React.lazy(() => import('./views/History/MyHistory/MyHistory'));
const Export = React.lazy(() => import('./views/History/Export/Export'));
const BuyCourseOnline = React.lazy(() => import('./views/BuyCourse/BuyCourseOnline'));
const BuyCourseClass = React.lazy(() => import('./views/BuyCourse/BuyCourseClass'));
const Receipt = React.lazy(() => import('./views/BuyCourse/Receipt'));
const IDP = React.lazy(() => import('./views/IDP/IDP'));
const AnnualCourse = React.lazy(() => import('./views/IDP/AnnualCourse'));
const CourseHistory = React.lazy(() => import('./views/History/CourseHistory/CourseHistory'));

const App = () => {
    return (
        <HashRouter>
            <React.Suspense fallback={loading}>
                <Switch>
                    <Route path="/dashboard" name="Home" render={props => <TheLayout {...props} />} />
                    <Route path="/ManagerDashboard" name="Home" render={props => <TheLayout {...props} />} />
                    <Route path="/MyCourse" component={CourseDescription} />
                    <Route path="/AllCourse" component={AllCourse} />
                    <Route path="/MyTeam" component={MyTeam} />
                    <Route path="/AddCourseClass" component={AddCourseClass} />
                    <Route path="/AddCourseOnline" component={AddCourseOnline} />
                    <Route path="/Teacher" component={Teacher} />
                    <Route path="/AddTeacher" component={AddTeacher} />
                    <Route path="/Dialogue/User" component={DialogueUser} />
                    <Route path="/Dialogue/Boss" component={DialogueBoss} />
                    <Route path="/Dialogue/Summary" component={DialogueSummary} />
                    <Route path="/TeacherInfo" component={TeacherInfo} />
                    <Route path="/OnlineLearning" component={OnlineLearning} />
                    <Route path="/Event" component={Event} />
                    <Route path="/CoursePermission" component={CoursePermission} />
                    <Route path="/MyHistory" component={MyHistory} />
                    <Route path="/Export" component={Export} />
                    <Route path="/CourseHistory" component={CourseHistory} />
                    <Route path="/BuyCourse/Online" component={BuyCourseOnline} />
                    <Route path="/BuyCourse/Class" component={BuyCourseClass} />
                    <Route path="/BuyCourse/Receipt" component={Receipt} />
                    <Route path="/IDP" component={IDP} />
                    <Route path="/AnnualCourse" component={AnnualCourse} />
                    {/* <Route component={NoPageFound} /> */}
                </Switch>
            </React.Suspense>
        </HashRouter>
    );
}

export default App;