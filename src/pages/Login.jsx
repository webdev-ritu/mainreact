import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await dispatch(loginUser( email, password ));
            navigate("/");
        }catch (error){
            alert("Invalid credentials");
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;