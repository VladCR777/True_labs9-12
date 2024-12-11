import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedPassword = localStorage.getItem(email);

        if (storedPassword && storedPassword === password) {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("userEmail", email);
            navigate("/home");
        } else {
            alert("Невірний email або пароль");
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

            <div style={{ margin: "20px 0" }}>
                Not a member?{" "}
                <Link to="/register" style={{ color: "blue" }}>
                    Sign up
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
