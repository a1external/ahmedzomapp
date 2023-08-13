import React, { useState } from 'react'
import { useGetRegisterDataMutation } from '../Services/apiConfig2';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registrationData, setRegistrationData] = useState({ email: '', password: '' });

  const [registerMutation, { isLoading: isRegisterLoading }] = useGetRegisterDataMutation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleRegistration = async () => {
    const response = await registerMutation(registrationData);
    try {
      console.log(response, "login data", response.daata)

      if (response.data.message === "Registration successful!") {
        console.log("Registration successful condition met.");
        alert("Registration successful! Please login.");
        navigate("/login");
      }

    } catch (error) {
      if (response.error.originalStatus === "409") {
        console.log("Already registered condition met.");
        alert("Already registered.");
        navigate("/login");
      }
      else { alert('Registration error', error) }

    }

  };

  return (
    <>
      <div>
        <h2>Registration</h2>
        <input
          type="text"
          name="email"
          placeholder="enter email"
          value={registrationData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="enter Password"
          value={registrationData.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <button onClick={handleRegistration} disabled={isRegisterLoading}>
          {isRegisterLoading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </>
  );
}
export default Register