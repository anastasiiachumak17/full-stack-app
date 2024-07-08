
import axios from 'axios';
import { FETCH_COMPANIES, FETCH_COMPANY, CREATE_COMPANY, UPDATE_COMPANY, DELETE_COMPANY } from './types';

const API_URL = 'http://localhost:5000';

export const fetchCompanies = (sortField = 'name') => async dispatch => {
    try {
        const res = await axios.get(`${API_URL}/companies?_sort=${sortField}`);
        dispatch({
            type: FETCH_COMPANIES,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
    }
};

export const fetchCompany = (id) => async dispatch => {
    try {
        const res = await axios.get(`${API_URL}/companies/${id}`);
        dispatch({
            type: FETCH_COMPANY,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
    }
};

export const createCompany = (formData) => async dispatch => {
    try {
        const res = await axios.post(`${API_URL}/companies`, formData);
        dispatch({
            type: CREATE_COMPANY,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
    }
};

export const updateCompany = (id, formData) => async dispatch => {
    try {
        const res = await axios.put(`${API_URL}/companies/${id}`, formData);
        dispatch({
            type: UPDATE_COMPANY,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
    }
};

export const deleteCompany = (id) => async dispatch => {
    try {
        await axios.delete(`${API_URL}/companies/${id}`);
        dispatch({
            type: DELETE_COMPANY,
            payload: id
        });
    } catch (err) {
        console.error(err);
    }
};
