import React, { useEffect, useState } from 'react'
import sanitizeIds from '../utils/SanitizeIds'
import './Cart.css'

function Cart() {
    const [ids, setIds] = useState([])

    useEffect(() => {
        async function getIds() {
            const ids = await sanitizeIds()
            setIds(ids)
        }

        getIds()
    }, [])

    return (
        <div className="container">
            <h1 className="indigo-text">Carrinho de Compras</h1>
            <ul className="collection">
                <li className="collection-item white-text blue-grey darken-1">
                    <span className="title truncate flow-text">D20</span>
                    <p className="flow-text truncate">Dado de 20 lados para sessões de RPG</p>
                    <div className="right">
                        <div className="counter">
                            <button><i className="material-icons add">add</i></button>
                            <span>0</span><span className="hide-on-small-only">itens</span>
                            <button><i className="material-icons remove">remove</i></button>
                        </div>
                        <span className="flow-text">R$ 20,00</span>
                    </div>
                </li>
                <li className="collection-item white-text blue-grey darken-1">
                    <span className="title truncate flow-text">D20</span>
                    <p className="flow-text truncate">Dado de 20 lados para sessões de RPG</p>
                    <div className="right">
                        <div className="counter">
                            <button><i className="material-icons add">add</i></button>
                            <span>0</span><span className="hide-on-small-only" >itens</span>
                            <button><i className="material-icons remove">remove</i></button>
                        </div>
                        <span className="flow-text">R$ 20,00</span>
                    </div>
                </li>
                <li className="collection-item white-text blue-grey darken-1">
                    <span className="title truncate flow-text">D20</span>
                    <p className="flow-text truncate">Dado de 20 lados para sessões de RPG</p>
                    <div className="right">
                        <div className="counter">
                            <button><i className="material-icons add">add</i></button>
                            <span>0</span><span className="hide-on-small-only">itens</span>
                            <button><i className="material-icons remove">remove</i></button>
                        </div>
                        <span className="flow-text">R$ 20,00</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Cart