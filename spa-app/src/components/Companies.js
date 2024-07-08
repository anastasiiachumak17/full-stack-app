
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanies } from '../actions/companyActions';
import { Link } from 'react-router-dom';

const Companies = () => {
    const dispatch = useDispatch();
    const companies = useSelector(state => state.companies);
    const [sortField, setSortField] = useState('name');

    useEffect(() => {
        dispatch(fetchCompanies(sortField));
    }, [dispatch, sortField]);

    return (
        <div>
            <h1>Companies</h1>
            <select onChange={(e) => setSortField(e.target.value)}>
                <option value="name">Name</option>
                <option value="service">Service</option>
            </select>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>
                        <Link to={`/company/${company.id}`}>{company.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Companies;
