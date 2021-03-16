import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import LoggedReducer from './reducers/isLogged';
import thunk from "redux-thunk";


const initialState = {
  sidebarShow: 'responsive'
};

const changeStateReducer = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest };
    default:
      return state
  }
};
const rootReducers = combineReducers({
  Logged: LoggedReducer,
  changeState: changeStateReducer
});
const allEnhancers = compose(
  applyMiddleware(thunk)
);
const store = createStore(
  rootReducers, allEnhancers
);
export default store