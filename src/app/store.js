import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default configureStore({
    reducer:{
        user: userReducer,
    }
})