
import axios from 'axios';
import { SIGN_UP, SIGN_IN, LOGOUT } from './types';

const API_URL = 'http://localhost:5000';

export const signUp = (formData) => async dispatch => {
    try {
        const res = await axios.post(`${API_URL}/users`, formData);
        dispatch({
            type: SIGN_UP,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
    }
};

export const signIn = (formData) => async dispatch => {
    try {
        const res = await axios.post(`${API_URL}/login`, formData);
        dispatch({
            type: SIGN_IN,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
    }
};

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};
