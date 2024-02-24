import React, {useState} from 'react'
import './LoginForm.css'
import Spinner from "react-bootstrap/Spinner";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

    const navigate = useNavigate();

    function spinnerSuccess() {
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginData = {
            username,
            password
        }

        try {
            const response = await fetch (
                "http://localhost:8080/api/v1/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginData)
                },
            );

            if (!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`);
            } else {
                const data = await response.json();
                localStorage.setItem("token", data.token);

                setLoginSuccess(true);

                setTimeout(() => {
                    setLoginSuccess(false);
                    navigate("/dashboard");
                }, 2000);

            }
        } catch (error) {
            setLoginSuccess(false);
            console.error("Error:", error);
        }
    };

    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2>Iniciar Sesión</h2>

                <form>
                    <div className="mb-3">

                        <label for="Nombre de Usuario" className="form-label">Nombre de Usuario</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            onChange={(e => setUsername(e.target.value))}
                        />

                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            onChange={(e => setPassword(e.target.value))}
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="recordar"/>
                        <label className="form-check-label" for="recorder">Recordarme</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >Iniciar Sesión
                    </button>

                    {loginSuccess && spinnerSuccess()}

                </form>
            </div>
        </div>
    )
}

export default LoginForm