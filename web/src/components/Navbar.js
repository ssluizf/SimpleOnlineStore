import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import './Navbar.css'
import handleProducts from '../utils/HandleProducts'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import api from '../services/api'

function Navbar() {
    const [quant, setQuant] = useState([1])

    const history = useHistory()

    async function handleProductsNav(e) {
        await handleProducts(e)
        
        history.push("/cart")
    }

    async function updateQuantity() {
        const cartData = await api.get('/carts').then(response => {
            return response.data
        })

        const cartIds = cartData.map(obj => {
            const id = obj._id
            return id
        })

        if(cartIds.length === quant.length) {
            for(let i = 0; i < cartIds.length; i++) {
                await api.patch(`/cart/${cartIds[i]}`, { quant: quant[i] })
            }
        }
    }

    async function saveQuant(e) {
        if(history.location.pathname === "/cart") {
            e.preventDefault()
            await updateQuantity()
            history.push('/')
        }
    }

    function handleQuant(array) {
        setQuant(array)
    }

    return(
    <>
        <div className="navbar-fixed">
            <nav>
                <header className="nav-wrapper indigo lighten-1">
                <NavLink to="/" className="brand-logo flow-text" onClick={e => saveQuant(e)}><i className="material-icons hide-on-small-only">shop_two</i>Shopping<span className="hide-on-small-only"> for</span></NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/cart" onClick={ e => handleProductsNav(e) }><i className="material-icons" id="cart">
                    <span>shopping_cart</span>
                    <div></div>
                    </i></NavLink></li>
                    <li><a href="/" onClick={ e => e.preventDefault() }><i className="material-icons">menu</i></a></li>
                </ul>
                </header>
            </nav>
        </div>
        
        <div className="wave-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffb74d" fillOpacity="1" d="M0,320L48,282.7C96,245,192,171,288,165.3C384,160,480,224,576,213.3C672,203,768,117,864,74.7C960,32,1056,32,1152,80C1248,128,1344,224,1392,272L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
        
        {history.location.pathname === "/"
            ?<Home />
            :<Cart quant={handleQuant} />
        }
    </>
    ) 
}

export default Navbar