import api from '../services/api'

async function sanitizeIds() {
    const cartData = await api.get('carts').then(response => {
        return response.data
    })

    const cartList = cartData
        .map(obj => {
            const idsGroups = obj.ids

            return idsGroups
        })

    let cartIds = []

    for (let i = 0; cartList.length > i; i++) {
        cartIds = cartIds.concat(...cartList[i])
    }

    return cartIds
}

export default sanatizeIds