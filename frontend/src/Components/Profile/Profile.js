import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/user/getuserdetails/test",
        );
        const user = await response.json();

        setFirstName(user.first_name);
        setLastName(user.last_name);
        setBirthDate(user.date_of_birth);
        setUsername(user.username);
        setEmail(user.email);
        setPhoneNumber(user.phone_number);
        setAddress(user.address);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData().catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedInfo = {
      first_name: firstName,
      last_name: lastName,
      date_of_birth: birthDate,
      username,
      email,
      phone_number: phoneNumber,
      address,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/user/updateuser/test",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + localStorage.getItem("token"),
          },
          body: JSON.stringify(updatedInfo),
        },
      );

      if (!response.ok) {
        setIsUpdateSuccessful(false);
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Error updating existing user.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (response.status === 204) {
        console.log("Updated user succesfully. No content returned.");
        setIsUpdateSuccessful(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const StatusUpdate = ({ isUpdateSuccessful, errorMessage }) => {
    return (
      <div className="status-update">
        <h4>
          {isUpdateSuccessful ? "User updated successfully " : errorMessage}
        </h4>
      </div>
    );
  };

  return (
    <div className="profile-container">
      <div className="update-form">
        <h3 style={{ marginBottom: "25px" }}>
          Actualizar/Cambiar Datos del Usuario
        </h3>

        <form>
          <h5>Nombres:</h5>
          <input
            type="text"
            placeholder="Nombres"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <h5>Apellidos:</h5>
          <input
            type="text"
            placeholder="Apellidos"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <h5>Fecha de Nacimiento:</h5>
          <input
            type="date"
            placeholder="Fecha de Nacimiento"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <h5>Nombre de Usuario:</h5>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5>Correo:</h5>
          <input
            type="text"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Numero de Telefono:</h5>
          <input
            type="text"
            placeholder="Numero de Telefono"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <h5>Direccion:</h5>
          <input
            type="text"
            placeholder="Direccion"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            Actualizar Datos
          </button>
        </form>

        <StatusUpdate
          isUpdateSuccessful={isUpdateSuccessful}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};

export default Profile;
