import React from 'react'

import './WhyCotton.css'

export default function WhyCotton() {
    return (
        <div className="why__container">
            <div className="why__side__img">
                <img src="" alt="" />
            </div>
            <div className="why__info__container">
                <div className="why__info__title">
                    <h1>Why Cotton</h1>
                </div>
                <p className="why__info__info">
                    Because cotton is a <span className="why__important">natural</span> product and because of the way it is designed and manufactured into clothing, it has many advantages, such as its ability to <span className="why__important">control moisture</span>, insulate, provide comfort and it is also <span className="why__important">hypoallergenic</span>, weatherproof and is a durable fabric.
                </p>
            </div>
            <div className="meet__team__container">
                <div className="meet__team__title">
                    <h1>Meet Our Team</h1>
                </div>
                <div className="meet__team__icons">
                    <div className="meet__team__icon">
                        <div className="team__icon" id="icon3"></div>
                        <div className="team__name">
                            John Doe
                        </div>
                        <div className="team__description">
                            Financial Analyst
                        </div>
                    </div>

                    {/* ----Icon 2---- */}
                    <div className="meet__team__icon">
                        <div className="team__icon" id="icon1"></div>
                        <div className="team__name">
                            John Doe
                        </div>
                        <div className="team__description">
                            Financial Analyst
                        </div>
                    </div>

                    {/* ----Icon 2---- */}
                    <div className="meet__team__icon">
                        <div className="team__icon" id="icon2"></div>
                        <div className="team__name">
                            John Doe
                        </div>
                        <div className="team__description">
                            Financial Analyst
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
