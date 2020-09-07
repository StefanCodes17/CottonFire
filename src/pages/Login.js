import React, { useState } from 'react'
import Background from '../assets/loginBgk.svg'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { auth } from '../firebase/firebase'

import './Login.css'

import { Link } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
    };


    const signInWithEmailAndPasswordHandler = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        });
    };

    return (
        <>
            <div className="login__body">
                <div className="login__background">
                    <img src={Background} alt="logo_markup"></img>
                </div>
                <div className="login__form__container">
                    <Link to="/">
                        <div className="back__button">
                            <ArrowBackIcon />
                        </div>
                    </Link>
                    <div className="login__form">
                        <div className="login__form__title">
                            <h1>Welcome Back!</h1>
                        </div>
                        <form onSubmit={signInWithEmailAndPasswordHandler}>
                            <input
                                type="text"
                                autoComplete="false"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={onChangeHandler}
                            />
                            <input
                                type="password"
                                autoComplete="false"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={onChangeHandler}
                            />
                            <p>{error}</p>
                            <button type="submit">Login</button>
                        </form>
                        <div className="login__signup__acc">
                            <p>Don't have an account?</p>
                            <Link to="/signup">
                                <p className="sign__text">Register</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
