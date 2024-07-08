
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import companyReducer from './companyReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    companies: companyReducer
});

export default rootReducer;
