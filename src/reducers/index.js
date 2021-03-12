import LoggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    Logged : LoggedReducer,
});

export default allReducers;