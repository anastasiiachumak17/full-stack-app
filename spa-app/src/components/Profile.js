
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../actions/authActions';

const Profile = () => {
    const user = useSelector(state => state.auth.user);
    const [form, setForm] = useState(user);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(form));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" value={form.email} onChange={handleChange} required />
            <input type="text" name="phone" value={form.phone} onChange={handleChange} required />
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
            <input type="text" name="nickname" value={form.nickname} onChange={handleChange} required />
            <input type="text" name="description" value={form.description} onChange={handleChange} required />
            <input type="text" name="position" value={form.position} onChange={handleChange} required />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default Profile;
