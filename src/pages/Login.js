import React from 'react'
import Background from '../assets/loginBgk.svg'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './Login.css'

import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="login__body">
                <div className="login__background">
                    <img src={Background}></img>
                </div>
                <div className="login__form__container">
                    <Link to="/">
                        <div className="back__button">
                            <ArrowBackIcon fontSize="medium" />
                        </div>
                    </Link>
                    <div className="login__form">
                        <div className="login__form__title">
                            <h1>Welcome Back!</h1>
                        </div>
                        <form>
                            <input
                                type="text"
                                autoComplete="false"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                autoComplete="false"
                                placeholder="Password"
                            />

                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
