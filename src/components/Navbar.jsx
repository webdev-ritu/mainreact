import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logoutUser} from '../redux/actions/authActions';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    return (
        <nav>
            <h2>My Library</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                {user && <li><Link to="/my-books">My Books</Link></li>}
                {user ? (
                    <>
                    <li>{user.email}</li>
                    <li><button onClick ={() => dispatch(logoutUser())}>Logout</button></li>
                    </>
                ) : (
                    <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>

        </nav>
    );
};
export default Navbar;
