import "./Login.css";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from './firebase';



function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = (e) => {
        e.preventDefault()  // Prevents from refreshing the page

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => { alert(error.message) });
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/');
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="Amazon logo" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='login__signInButton' type='submit' onClick={signIn}>
                        Sign in
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login

