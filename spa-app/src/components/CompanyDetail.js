
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompany, updateCompany } from '../actions/companyActions';
import { useParams, Link } from 'react-router-dom';

const CompanyDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const company = useSelector(state => state.company);
    const [form, setForm] = useState({
        name: '',
        address: '',
        service: '',
        numberOfEmployees: '',
        description: '',
        type: ''
    });

    useEffect(() => {
        dispatch(fetchCompany(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (company) {
            setForm({
                name: company.name,
                address: company.address,
                service: company.service,
                numberOfEmployees: company.numberOfEmployees,
                description: company.description,
                type: company.type
            });
        }
    }, [company]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCompany(id, form));
    };

    return (
        <div>
            <Link to="/companies">Back to Companies</Link>
            <h1>{company?.name}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
                <input type="text" name="address" value={form.address} onChange={handleChange} required />
                <input type="text" name="service" value={form.service} onChange={handleChange} required />
                <input type="number" name="numberOfEmployees" value={form.numberOfEmployees} onChange={handleChange} required />
                <input type="text" name="description" value={form.description} onChange={handleChange} required />
                <input type="text" name="type" value={form.type} onChange={handleChange} required />
                <button type="submit">Update Company</button>
            </form>
        </div>
    );
};

export default CompanyDetail;
