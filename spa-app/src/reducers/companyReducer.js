
import { FETCH_COMPANIES, FETCH_COMPANY, CREATE_COMPANY, UPDATE_COMPANY, DELETE_COMPANY } from '../actions/types';

const initialState = {
    companies: [],
    company: null
};

const companyReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COMPANIES:
            return {
                ...state,
                companies: action.payload
            };
        case FETCH_COMPANY:
            return {
                ...state,
                company: action.payload
            };
        case CREATE_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.payload]
            };
        case UPDATE_COMPANY:
            return {
                ...state,
                companies: state.companies.map(company =>
                    company.id === action.payload.id ? action.payload : company
                ),
                company: action.payload
            };
        case DELETE_COMPANY:
            return {
                ...state,
                companies: state.companies.filter(company => company.id !== action.payload)
            };
        default:
            return state;
    }
};

export default companyReducer;
