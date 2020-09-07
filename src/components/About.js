import React from 'react'

import './About.css'
import Soft from '../assets/Soft.svg'
import Custom from '../assets/Custom.svg'

export default function About() {
    return (
        <div className="about__container" id="about">
            <div className="about__info__container">
                <div className="about__info__container__title">
                    <div className="about__info__logo">
                        <img src={Soft} alt="Soft" width="100px" />
                    </div>
                    <h1>Extra Soft Comfort</h1>
                </div>
                <div className="about__info__container__info">
                    With the premium grade cotton from the mountains of Mexico
                    wearing any of our apparel will feel like a paradise
                    in of itself. With a softness ratings from 5-9 you get
                    to customize your experience wearing our materials
                </div>
            </div>
            <div className="about__info__container">
                <div className="about__info__container__title">
                    <div className="about__info__logo">
                        <img src={Custom} alt="Soft" width="100px" />
                    </div>
                    <h1>Customization</h1>
                </div>
                <div className="about__info__container__info">
                    With premium customization you can fit any shirt and
                    apparel to your body type. No more lose fits or tight shirts.
                    Let the cotton mold to your body type to complement any
                    features you desire to get the ultimate outfit.
                </div>
            </div>
        </div>
    )
}
