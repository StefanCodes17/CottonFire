import React from 'react'

import './Product.css'

import { Card } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react';

import { UserContext } from '../UserContext'
import { addProductToUser } from '../firebase/firebase';

export default function Product({ name, price, img }) {
    let history = useHistory();
    const ctx = useContext(UserContext);

    const handleCart = () => {
        if (!ctx) { history.push("/login") }
        else {
            addProductToUser(ctx, name)
        }
    }

    return (
        <>
            <Card className="card">
                <div className="card__title">{name}</div>
                <div className="card__image">
                    <img src={img}></img>
                </div>
                <div className="card__price">
                    <span>$</span>{price}
                </div>
                <div className="card__cta__buy">
                    <button onClick={handleCart}>Add to Cart</button>
                </div>
                <div className="card__cta__view">
                    <button>View</button>
                </div>
            </Card >
        </>
    )
}
