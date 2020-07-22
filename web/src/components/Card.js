import React, { useEffect, useState } from 'react';
import api from '../services/api'

import './Card.css'
import ToggleClasses from '../utils/ToggleClasses.js'
import createElems from '../utils/CreateElems.js'
import { Link } from 'react-router-dom'

function Card() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      api.get('products').then(response => {
        setProducts(response.data)
      })
    }, [])

    function selectCard(e) {
      const currentTarget = e.currentTarget
      const cash = currentTarget.children[1]
      const cartElements = document.getElementById('cart').children
      const cart = cartElements[0]
      const circle = cartElements[1]
  
      const elems = createElems(e, 2)

      cart.innerHTML = 'add_shopping_cart'
      ToggleClasses.spotlight([elems.currentCard, elems.currentImage])
      ToggleClasses.active([circle, cash])
      ToggleClasses.scaleIn([elems.close])
      ToggleClasses.hide([elems.currentText])
      
      setTimeout(() => {
        ToggleClasses.active([circle, cash])
        ToggleClasses.scaleIn([elems.currentTarget])
      }, 200)
    }

    function cancelCard(e) {
      const elems = createElems(e, 1)

      ToggleClasses.spotlight([elems.currentCard, elems.currentImage])
      ToggleClasses.scaleIn([elems.currentButton])
      ToggleClasses.scaleIn([elems.currentTarget])
      ToggleClasses.hide([elems.currentText])
    }

    return (
      <>
        {products.map(product => (
        <div key={product._id} className="col s12 m6 push-l1">
          <div className="card" listid={product._id}>
            <span className="btn-floating btn-small scale-transition scale-out" onClick={cancelCard}><i className="material-icons">close</i></span>
            <div className="card-image">
              <img src={product.img_url} alt="Product"></img>
              <Link className="card-title hide" to="/cart">Go to Cart</Link>
              <span className="btn-floating btn-large halfway-fab waves-effect waves-light yellow accent-4 scale-in" onClick={selectCard}><i className="material-icons">attach_money</i></span>
            </div>
            <div className="card-content">
              <span className="card-title">{product.name} - <strong>R$ {product.price},00</strong></span>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        ))}
      </>
    )
}

export default Card