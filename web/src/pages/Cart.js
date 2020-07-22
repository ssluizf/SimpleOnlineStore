import React, { useEffect } from 'react'
import api from '../services/api'

function Cart() {
    useEffect(() => {
        api.get('carts').then(response => {
            const resp = response.data
        })
    }, [])
    return (
        <div>CART PRODUCTS</div>
    )
}

export default Cart