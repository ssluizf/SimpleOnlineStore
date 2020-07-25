import api from '../services/api'

async function sanitizeCart() {
    const cartData = await api.get('carts').then(response => {
        return response.data
    })

    const ids = cartData
        .map(obj => {
            const id = obj.prod_id

            return id
        })

    const quantity = cartData
        .map(obj => {
            const quant = obj.quant

            return quant
        })

    return { ids, quantity }
}

export default sanitizeCart