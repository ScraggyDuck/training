import * as types from '../constants/actionTypes';
var user = localStorage.getItem('user');
var initialState = false;
if(user){
    initialState = true;
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return action.isLogin;
        default:
            return state;
    }
};

export default login;