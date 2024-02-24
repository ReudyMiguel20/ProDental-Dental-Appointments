import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2>Iniciar Sesión</h2>

                <form>
                    <div className="mb-3">
                        <label for="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Recordarme</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm