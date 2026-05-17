import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Signin = ({setUser}) => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/users/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error("Failed to signin");
            }

            const data = await response.json();
        
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.user.name);
            setUser('user', data.user.name);
            navigate("/");

        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div className="container mt-4">
            <h1 className = 'text-center'>Sign In</h1>
            {error && <p className="alert alert-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>
    );
}

export default Signin;