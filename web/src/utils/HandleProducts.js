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

    const selectedProductsToCart = products
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
    
    const deselectedProductsOnCart = products
        .filter(prod => {
            return selectedIds.includes(prod._id) ? false : prod
        })
        .map(select => {
            return select._id
        })
        .filter(id => {
            const validIds = cartIds.includes(id) ? id : false

            return validIds
        })

    if (selectedProductsToCart.length > 0) {
        for (let product of selectedProductsToCart) {
            await api.post('/carts', { id : product, quant: 1 })
        }
    }
    
    if (deselectedProductsOnCart.length > 0) {
        for (let product of deselectedProductsOnCart) {
            await api.delete(`cart/${product}`)
        }
    }
}

export default handleProducts