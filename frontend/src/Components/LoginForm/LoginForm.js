import React, {useEffect, useState} from "react";
import "./LoginForm.css";
import Spinner from "react-bootstrap/Spinner";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

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
      password,
    };

    try {
      const response = await fetch("https://prodental-website-df2c2d1fd4bd.herokuapp.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        localStorage.clear();
        throw new Error(`HTTP Error! status: ${response.status}`);
      } else {
        localStorage.clear();

        const data = await response.json();
        const decodedToken = jwtDecode(data.token);

        localStorage.setItem("user", decodedToken.sub);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userLoggedIn", true);
        localStorage.setItem("userRole", decodedToken.role[0].authority);

        setLoginSuccess(true);

        setTimeout(() => {
          setLoginSuccess(false);
          navigate("/dashboard");
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      setLoginSuccess(false);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    document.title = "Iniciar Sesión - Pro Dental";
  }, []);

  return (
      <div className="login-form-container">
        <div className="login-form">
          <h2>Iniciar Sesión</h2>

          <form>
            <div className="mb-3">
              <label htmlFor="Nombre de Usuario" className="form-label">
                Nombre de Usuario
              </label>
              <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="recordar" />
              <label className="form-check-label" htmlFor="recordar">
                Recordarme
              </label>
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
            >
              Iniciar Sesión
            </button>

            {loginSuccess && spinnerSuccess()}
          </form>
        </div>
      </div>
  );
};

export default LoginForm;