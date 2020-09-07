import React from 'react'

import Navbar from '../components/Navbar'
import About from '../components/About'
import WhyCotton from '../components/WhyCotton'
import Footer from '../components/Footer'
import './Home.css'

import Hero from '../assets/Banner-Background.jpg'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="hero__background">
                <img src={Hero} alt='background'></img>
            </div>
            <div className="hero__info__container">
                <div className="hero__info">
                    <h1>World's Leading Cotton <br />Clothing Manufacturer</h1>
                    <p>Each piece of clothing is woven from premium quality cotton </p>
                    <button type="button" className="hero__button">Shop Aparell</button>
                </div>
            </div>
            <About />
            <WhyCotton />
            <Footer />
        </div >
    )
}
