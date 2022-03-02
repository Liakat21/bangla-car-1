
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Login.css';



const Login = ( setLoginSuccess, handleLoginClose) => {
    const { signInUsingGoogle } = useFirebase();
    const handleLogin = e => {
        console.log('login will be added')
        e.preventDefault();
    }
    const handleEmailChange = e => {
        console.log(e.target.value)
    }
    const handlePasswordChange = e => {
        console.log(e.target.value)
    }
    
      
    fetch('http://localhost:5000/cars', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            // body: JSON.stringify(cars)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setLoginSuccess(true);
                    handleLoginClose();
                }
            });

    return (
        <div className="container">
            <h1 className="login text-center text-primary my-4">Please login here</h1>
            
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Button onClick={handleLogin}  type="submit" className="btn btn-primary">Submit</Button> 
                <br />
                <p>or</p>
                <Button className="btn btn-primary" onClick={signInUsingGoogle}>Google Sign In</Button> <br />
                <Link to="/register">New user, Registered?</Link>
            </form>
            <div >
               <img className='login my-4' src="https://wallpaperaccess.com/full/4893735.jpg" alt="" />
           </div>
            {/* <p>Or</p>
            <Button className="my-4" onClick={signInUsingGoogle}>Google Sign In</Button> <br /> */}
           
        </div>
    );
};

export default Login;