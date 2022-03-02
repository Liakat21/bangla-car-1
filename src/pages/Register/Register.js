import React, { useState } from 'react';
import { Button,  Alert } from 'react-bootstrap';
import './Register.css';
import { Link } from 'react-router-dom';
import useAuth from "./../Hooks/useAuth";

const Register = () => {

  const [loginData, setLoginData] = useState({});

  const {user,  registerUser} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
   const handleLoginSubmit = e => {
       if (loginData.password !== loginData.password2){
           alert('Your password did not match');
           return
       }
      registerUser(loginData.email, loginData.password);
      e.preventDefault();
   }

    return (
        <div className="container register-form text-center">
            <h1> Please Register</h1>
            <input onBlur = {handleOnBlur} type="text" placeholder="name" className="input my-1" /><br /> <br />
            <input onBlur = {handleOnBlur} type="text" placeholder="email" className="input my-1" /><br /> <br />
            <input onBlur = {handleOnBlur} type="password" placeholder="password" className="input my-2" /><br />
            <Button onClick = {handleLoginSubmit} className=" my-1">Register</Button> <br />
            <Link to="/login">Already Registered?</Link>
            {user?.email && <Alert severity="success">Your registration is complete.</Alert>}

        </div>
    );
};

export default Register;