import React from 'react';
import './Card.css'
import chess from '../assets/img/chess.jpg'

import ToggleClasses from '../utils/ToggleClasses.js'
import createElems from '../utils/CreateElems.js'

function Card() {

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
      <div className="col s12 m6 push-l1">
        <div className="card">
          <a className="btn-floating btn-small scale-transition scale-out" onClick={cancelCard}><i className="material-icons">close</i></a>
          <div className="card-image">
            <img src={chess} alt="Product"></img>
            <a className="card-title hide" href="pages/cart.html">Go to Cart</a>
            <a className="btn-floating btn-large halfway-fab waves-effect waves-light yellow accent-4 scale-in" onClick={selectCard}><i className="material-icons">attach_money</i></a>
          </div>
          <div className="card-content">
            <span className="card-title">Chess - <strong>R$ 20,00</strong></span>
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>
    )
}

export default Card