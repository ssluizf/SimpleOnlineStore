import api from '../services/api'
import sanitizeCart from '../utils/SanitizeCart'

async function handleProducts(e) {
    e.preventDefault()
    
    const products = await api.get('products').then(response => {
        return response.data
    })

    const cartIds = (await sanitizeCart()).ids

    const selectedIds = Array.prototype.slice.call(document.getElementsByClassName("card spotlight")).map(e => {
        return e.getAttribute('listid')
    })

    const selectedProducts = products
        .filter(prod => {
            return selectedIds.includes(prod._id) ? prod : false
        })
        .map(select => {
            return select._id
        })
        .filter(id => {
            const validIds = cartIds.includes(id) ? false : id
    
            return validIds
        })
    
    if (selectedProducts.length > 0) {
        for (let product of selectedProducts) {
            await api.post('/carts', { id : product, quant: 1 })
        }
    }
}

export default handleProducts