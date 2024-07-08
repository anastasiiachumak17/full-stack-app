
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../actions/authActions';

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        phone: '',
        lastName: '',
        firstName: '',
        nickname: '',
        description: '',
        position: ''
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
        dispatch(signUp(form));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
            <input type="text" name="phone" value={form.phone} onChange={handleChange} required />
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
            <input type="text" name="nickname" value={form.nickname} onChange={handleChange} required />
            <input type="text" name="description" value={form.description} onChange={handleChange} required />
            <input type="text" name="position" value={form.position} onChange={handleChange} required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
