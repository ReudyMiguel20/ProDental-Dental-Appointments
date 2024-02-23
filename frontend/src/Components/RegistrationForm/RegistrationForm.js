import React, {useState} from 'react'
import "./RegistrationForm.css"

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className="registration-form-container">
        <div className="form-container">
            <h3>Crear nuevo usuario</h3>

            <form>
                <h5>Nombre:</h5>
                <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />

                <h5>Apellidos:</h5>
                <input
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />

                <h5>Fecha de Nacimiento:</h5>
                <input
                    type="date"
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                />

                <h5>Correo:</h5>
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <h5>Numero de Telefono:</h5>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />

                <h5>Dirección:</h5>
                <input
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />

                <h5>Nombre de Usuario:</h5>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <h5>Contraseña:</h5>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="button-form">
                    Crear nueva cuenta
                </button>
            </form>
        </div>
    </div>
  )
}

export default RegistrationForm