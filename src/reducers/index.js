import LoggedReducer from './isLogged';
import changeState from './dashboardState';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    Logged : LoggedReducer,
    changeState : changeState,
});

export default allReducers;