
import { SIGN_UP, SIGN_IN, LOGOUT } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
        case SIGN_IN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;
