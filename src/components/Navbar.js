import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext'
import useWindowDimensions from '../hooks/useWindowDimensions'

import Logo from '../assets/Icon.svg'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Link, Redirect } from 'react-router-dom'

import firebase from 'firebase'

import './Navbar.css'

export default function Navbar() {
    const ctx = useContext(UserContext);

    const [menu, setMenu] = useState(true);
    const [about, setAbout] = useState(false);

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width <= 650) {
            setMenu(false)
        }
    }, [width]);

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(() => {
                console.log('Successful Signout!')
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            })
    }

    const controlMenu = (ctx) => {
        return (
            <>
                <ul className={width >= 650 ? "nav__menu__items__lg" : menu ? "nav__menu__items__md" : "close"}>
                    {ctx ? <li className="nav__welcome">Welcome,<span className="nav__user__name"> {ctx.name} </span></li> : ''}
                    <li>
                        {about && <Redirect to="/" />}
                        <a href="#about" onClick={() => { setAbout(!about) }}>About</a>
                    </li>
                    <li>
                        <Link to="products">Shop</Link>
                    </li>
                    {
                        ctx ?
                            <li className="nav__shopping__cart">
                                <ShoppingCartIcon />
                            </li> : null
                    }
                </ul>

                {
                    ctx ?
                        <button type='button' className="nav__menu__button__lg" onClick={handleSignOut}>
                            <p>Sign Out</p>
                        </button> :
                        <Link to="/login">
                            <button type='button' className="nav__menu__button__lg">
                                <p>Login</p>
                            </button>
                        </Link>
                }

            </>
        )
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/" style={{ padding: '10px 0px 0px 0px' }}>
                    <div className="nav__logo">
                        <div className="logo">
                            <img src={Logo} alt="Logo" width="60px" />
                        </div>
                        <div className="logo__text">
                            <h2>CottonFire</h2>
                        </div>
                    </div>
                </Link>

                <div className="nav__menu__toggle">
                    <MenuIcon fontSize="large" onClick={() => { setMenu(!menu) }} />
                </div>
                <div className={width >= 650 ? "nav__menu__lg" : menu ? "nav__menu__md" : "close"}>
                    {controlMenu(ctx)}
                </div>
            </nav >
            {menu && width <= 650 ? <div className="backdrop"></div> : null}
        </>
    )
}
