import React, { useEffect, useState } from 'react'
import api from '../services/api'
import sanitizeIds from '../utils/SanitizeIds'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart() {
    const [products, setProducts] = useState([])
    const [counter, setCounter] = useState([0])
    const [hide, setHide] = useState(false)
    
    var count = [].concat(counter)

    useEffect(() => {
        async function getProductsByIds() {
            const ids = await sanitizeIds()
            let prods = []

            for (let id of ids) {
                const data = await api.get(`products/${id}`).then(res => {
                    return res.data
                })

                prods.push(data)
            }

            const range = [...Array(ids.length)].map(e => 1)

            setCounter(range)
            setProducts(prods)
        }

        getProductsByIds()
    }, [])

    function removeCollectionItem(product, index, array) {
        if(count[index] === 1) {
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
            <h1 className="indigo-text">Carrinho de Compras</h1>
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
                                        <button><i className="material-icons add" onClick={() => { count.splice(index, 1, count[index] + 1); setCounter(count) }}>add</i></button>
                                        <span>{counter[index]}</span><span className="hide-on-small-only">itens</span>
                                        <button><i className="material-icons remove" onClick={() => { removeCollectionItem(product, index, array); count.splice(index, 1, count[index] - 1); setCounter(count) }}>remove</i></button>
                                    </div>
                                    <span className="flow-text">R$ {product.price * counter[index]},00</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Link to="buy" className="waves-effect waves-light btn-large yellow accent-4 black-text" id="buy"><i className="material-icons right">attach_money</i><strong>Finalizar Compra</strong></Link>
                </>
                : <Link to="/" className="no-prods"><i className="material-icons large">shopping_cart</i><p>Seu carrinho está vazio.</p><p>Inicie suas compras na loja!</p></Link>
            }
        </div>
    )
}

export default Cart