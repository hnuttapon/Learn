const initialState = {
    UID: null,
    FirstName: null,
    LastName: null,
    Email: null,
    Role: null,
}

const LoggedReducer = (state = initialState, action) => {
    // Check to see if the reducer cares about this action
    if (action.type === 'LOGIN') {
      return {
        UID: action.payload.UID,
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
        Email: action.payload.Email,
        Role: action.payload.Role,
      }
    }
    else if(action.type === 'LOGOUT'){
      return {
        UID: null,
        FirstName: null,
        LastName: null,
        Email: null,
        Role: null,
      }
    }
    else{
      return state;
    }
}

export default LoggedReducer;

