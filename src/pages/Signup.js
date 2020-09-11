import React from 'react'
import Background from '../assets/loginBgk.svg'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './Signup.css'

import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';

import { auth, generateUserDocument } from '../firebase/firebase'


export default function Login() {
    let history = useHistory();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');


    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value)
        }
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPass(value)
        }
    }

    const createUserHandler = async (e) => {
        e.preventDefault();

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, pass);
            generateUserDocument(user, { name, cart: [] });
            history.push('/login')
        }
        catch (error) {
            setError('Error Signing up with email and password');
        }

        setName('');
        setEmail('');
        setPass('')
    }


    return (
        <>
            <div className="signup__body">
                <div className="signup__background">
                    <img src={Background} alt="logo_markup"></img>
                </div>
                <div className="signup__form__container">
                    <Link to="/">
                        <div className="back__button">
                            <ArrowBackIcon />
                        </div>
                    </Link>
                    <div className="signup__form">
                        <div className="signup__form__title">
                            <h1>Welcome! Register: </h1>
                        </div>
                        <form onSubmit={createUserHandler}>
                            <input
                                type="text"
                                autoComplete="false"
                                placeholder="Username"
                                name="name"
                                value={name}
                                onChange={onChangeHandler}
                            />
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
                                value={pass}
                                onChange={onChangeHandler}
                            />
                            <p className="error">{error}</p>
                            <button type="submit">Register</button>
                        </form>
                        <div className="signup__login__acc">
                            <p>Already have an account?</p>
                            <Link to="/login">
                                <p className="login__text">Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
