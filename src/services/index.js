import axios from 'axios'

const URL = `https://ecommerce-exercise-backend.herokuapp.com/`

const getConfig = () => ({

    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export const loginUser = async (data) => {

    const req = await axios.post(`${URL}login/`, data)
    return req.data
}

export const singUp = async (data) => {

    const req = await axios.post(`${URL}users/`, data)
    return req.data
}

export const getProducts = async () => {

    const req = await axios.get(`${URL}products/`, getConfig())
    return req.data
}

export const getProductById = async (id) => {
    const req = await axios.get(`${URL}products/${id}/`, getConfig())
    return req.data
}

export const getCategories = async () => {
    const req = await axios.get(`${URL}categories/`, getConfig())
    return req.data
}

export const getFilterForCategories = async (id) => {
    const req = await axios.get(`${URL}products/?category=${id}`, getConfig())
    return req.data

}

export const addProductToCart = async (data) => {
    const req = await axios.post(`${URL}products/add_to_cart/`, data, getConfig())
    return req.data
}

export const getProductsFromCart = async () => {
    const req = await axios.get(`${URL}cart/`, getConfig())
    return req.data
}

export const getFilterHeadline = async (headline) => {
    const req = await axios.get(`${URL}products/?name__icontains=${headline}`, getConfig())
    return req.data
}

export const getProductRings = async () => {
    const req = await axios.get(`${URL}products/?category=3`, getConfig())
    return req.data
}

export const getProductNecklaces = async () => {
    const req = await axios.get(`${URL}products/?category=3`, getConfig())
    return req.data
}

export const getProductList = async (id) => {
    const req = await axios.get(`${URL}products/${id}/`, getConfig())
    return req.data
}

export const deleteProductCart = async (id) =>{
    const req = await axios.delete(`${URL}cart/${id}/remove_item/`, getConfig())
    return req.data
}

export const postCheckout = async () => {
    const req = await axios.post(`${URL}cart/buy/`, {} ,getConfig())
    return req.data
}