import React, { useEffect, useState } from 'react'
import api from '../services/api'
import sanitizeCart from '../utils/SanitizeCart'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart(props) {
    const [products, setProducts] = useState([])
    const [counter, setCounter] = useState([0])
    const [hide, setHide] = useState(false)

    useEffect(() => {
        async function getProductsByIds() {
            const ids = (await sanitizeCart()).ids
            const quantity = (await sanitizeCart()).quantity

            let prods = []

            for (let id of ids) {
                const data = await api.get(`products/${id}`).then(res => {
                    return res.data
                })

                prods.push(data)
            }

            setCounter(quantity)
            setProducts(prods)
        }

        getProductsByIds()
    }, [])

    useEffect(() => {
        props.quant(counter)
    }, [counter])

    function counterSet(index, operation) {
        let count = [].concat(counter)

        switch(operation) {
            case '+':
                count.splice(index, 1, count[index] + 1)
                break;
            case '-':
                count.splice(index, 1, count[index] - 1)
                break;
            default:
                break;
        }

        setCounter(count)
    }

    function removeCollectionItem(product, index, array) {
        if(counter[index] === 1) {
            const collection = Array.prototype.slice.call(document.getElementsByClassName('collection-item'))
            collection[index].classList.add('hide')

            if (Array.prototype.slice.call(document.getElementsByClassName('collection-item hide')).length === array.length) {
                setHide(true)
            }

            return api.delete(`cart/${product._id}`)
        }
    }
    return (
        <div className="container">
            <h1 className="indigo-text text-lighten-1 center">Carrinho de Compras</h1>
            {(typeof products !== 'undefined' && products.length > 0) ^ hide
                ?
                <>
                    <ul className="collection z-depth-5">
                        {products.map((product, index, array) => (
                            <li className="collection-item white-text blue-grey darken-1" key={product._id}>
                                <span className="title truncate flow-text">{product.name}</span>
                                <p className="flow-text truncate">{product.description}</p>
                                <div className="right">
                                    <div className="counter">
                                        <button><i className="material-icons add" onClick={() => { counterSet(index, '+') }}>add</i></button>
                                        <span>{counter[index]}</span><span className="hide-on-small-only">itens</span>
                                        <button><i className="material-icons remove" onClick={() => { removeCollectionItem(product, index, array); counterSet(index, '-') }}>remove</i></button>
                                    </div>
                                    <span className="flow-text">R$ {product.price * counter[index]},00</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Link to="/buy" className="waves-effect waves-light btn-large yellow accent-4 black-text" id="buy"><i className="material-icons right">attach_money</i><strong>Finalizar Compra</strong></Link>
                </>
                : <Link to="/" className="no-prods blue-grey-text text-darken-1"><i className="material-icons large">shopping_cart</i><p>Seu carrinho está vazio.</p><p>Inicie suas compras na loja!</p></Link>
            }
        </div>
    )
}

export default Cart