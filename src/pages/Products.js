import React from 'react'

import Navbar from '../components/Navbar'
import './Products.css'
import { useState } from 'react';
import Product from '../components/Product'

import { Grid } from '@material-ui/core';

import { generateProductDocument } from '../firebase/firebase'

export default function Products() {
    const items = [1, 2, 3, 4, 5, 6, 7]

    const handleActive = (e) => {
        const categories = document.querySelectorAll("li");
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].className) {
                categories[i].className = ""
            }
        }
        e.target.className = "active";
    }

    const getProducts = () => {


    }

    return (
        <>
            <Navbar />
            <div className="categories">
                <ul className="category__names">
                    <li onClick={handleActive}>New Arrivals</li>
                    <li onClick={handleActive}>Trending</li>
                    <li onClick={handleActive}>Men</li>
                    <li onClick={handleActive}>Women</li>
                    <li onClick={handleActive}>Youth</li>
                    <li onClick={handleActive}>All</li>
                </ul>
            </div>
            <Grid container
                spacing={2}
                className="grid">
                {items.map(index => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Product name={"Product " + index} price="99" img="" />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
