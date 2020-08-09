import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import api from '../services/api'
import './Card.css'

import handleProducts from '../utils/HandleProducts'
import sanitizeCart from '../utils/SanitizeCart'

function Card() {
    const [products, setProducts] = useState([])
    const [selected, setSelected] = useState([])
    const history = useHistory()

    useEffect(() => {
      api.get('products').then(response => {
        setProducts(response.data)
      })
    }, [])

    useEffect(() => {
      async function getSelectedCarts() {

        const ids = (await sanitizeCart()).ids
        const selectedProds = products.map((prod) => { return ids.includes(prod._id) ? true : false })

        setSelected(selectedProds)
      }

      if (products.length <= 0) { return }

      getSelectedCarts()
    }, [products])

    async function handleProductsNav(e) {
      await handleProducts(e)

      history.push("/cart")
    }

    function selectedSet(index, bool) {
      let select = [].concat(selected)

      if(bool) {
        select.splice(index, 1, bool)
      } else {
        select.splice(index, 1, bool)
      }

      setSelected(select)
    }

    function animate() {
      const cartElements = document.getElementById('cart').children
      const cart = cartElements[0]
      const circle = cartElements[1]

      cart.innerHTML = 'add_shopping_cart'

      circle.classList.toggle('active')
      setTimeout(() => circle.classList.toggle('active'), 200)
    }

    return (
      <>
        {products.map((product, index) => (
          selected[index] 
            ?
            <div key={product._id} className="col s12 m6 l6">
              <div className="card spotlight" listid={product._id}>
                <span className="btn-floating btn-small scale-transition scale-in" onClick={() => selectedSet(index, false)}><i className="material-icons">close</i></span>
                <div className="card-image">
                  <img src={product.img_url} className="spotlight" alt="Product"></img>
                  <Link className="card-title" to="/cart" onClick={ e => handleProductsNav(e) }>Go to Cart</Link>
                  <span className="btn-floating btn-large halfway-fab waves-effect waves-light yellow accent-4 scale-transition scale-out" onClick={() => selectedSet(index, true)}><i className="material-icons">attach_money</i></span>
                </div>
                <div className="card-content">
                  <span className="card-title">{product.name} - <strong>R$ {product.price},00</strong></span>
                  <p className="truncate">{product.description}</p>
                </div>
              </div>
            </div>
            :
            <div key={product._id} className="col s12 m6 l6">
              <div className="card" listid={product._id}>
                <span className="btn-floating btn-small scale-transition scale-out" onClick={() => selectedSet(index, false)}><i className="material-icons">close</i></span>
                <div className="card-image">
                  <img src={product.img_url} alt="Product"></img>
                  <Link className="card-title hide" to="/cart" onClick={ e => handleProductsNav(e) }>Go to Cart</Link>
                  <span className="btn-floating btn-large halfway-fab waves-effect waves-light yellow accent-4" onClick={() => { selectedSet(index, true); animate() }}><i className="material-icons">attach_money</i></span>
                </div>
                <div className="card-content">
                  <span className="card-title">{product.name} - <strong>R$ {product.price},00</strong></span>
                  <p className="truncate">{product.description}</p>
                </div>
              </div>
            </div>
        ))}
      </>
    )
}

export default Card