import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext'
import useWindowDimensions from '../hooks/useWindowDimensions'

import Logo from '../assets/Icon.svg'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
    const ctx = useContext(UserContext);

    const [menu, setMenu] = useState(true);

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width <= 650) {
            setMenu(false)
        }
    }, [width]);


    const controlMenu = (ctx) => {
        return (
            <>
                <ul className={width >= 650 ? "nav__menu__items__lg" : menu ? "nav__menu__items__md" : "close"}>
                    {ctx.user.loggedIn ? <li className="nav__welcome">Welcome,<span className="nav__user__name"> {ctx.user.name} </span></li> : ''}
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        Shop
                    </li>
                    {
                        ctx.user.loggedIn ?
                            <li className="nav__shopping__cart">
                                <ShoppingCartIcon fontSize="medium" />
                            </li> : null
                    }
                </ul>
                <Link to="/login">
                    <button type='button' className="nav__menu__button__lg">
                        {ctx.user.loggedIn ? <p>Sign Out</p> : <p>Login</p>}
                    </button>
                </Link>
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
