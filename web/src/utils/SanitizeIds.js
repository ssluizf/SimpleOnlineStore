import api from '../services/api'

async function sanitizeIds() {
    const cartData = await api.get('carts').then(response => {
        return response.data
    })

    const ids = cartData
        .map(obj => {
            const groupedIds = obj.prod_id

            return groupedIds
        })

    return ids
}

export default sanitizeIds