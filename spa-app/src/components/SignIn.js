
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/authActions';

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(form));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
