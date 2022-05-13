import { deleteProductCart, getCategories, getFilterForCategories, getFilterHeadline, getProductById, getProducts, getProductsFromCart, singUp } from "../../services"



export const actions = {
    productSetAll: "@product/setAll",
    productSetInfoSetById: "@productInfo/setById",
    setIsLoading: "@setIsLoading",
    setCategories: "@setCategories",
    setNotification: "@setNotification",
    cartSetProducts: "@cart/SetProducts",
}

export const setProductstoCart = (data) => ({
    type: actions.cartSetProducts,
    payload: data
})

export const productSetAll = (data) => ({
    type: actions.productSetAll,
    payload: data
})

export const setProductInfo = (data) => ({
    type: actions.productSetInfoSetById,
    payload: data
})

export const setIsLoading = (isLoading) => ({
    type: actions.setIsLoading,
    payload: isLoading
})

export const setNotification = message => ({
    type: actions.setNotification,
    payload: message
})

export const setCategories = (data) => ({
    type: actions.setCategories,
    payload: data
})



export const setProductThunk = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        getProducts()
            .then((res) => {
                dispatch(productSetAll(res))
            })
            .finally(() => dispatch(setIsLoading(false)));
    }
}

export const setInfoProductThunk = (id) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        getProductById(id)
            .then((res) => {
                dispatch(setProductInfo(res))
            })
            .finally(() => dispatch(setIsLoading(false)));

    }
}

export const setCategoriesThunk = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        getCategories()
            .then((res) => {
                dispatch(setCategories(res))
            })
            .finally(() => dispatch(setIsLoading(false)));

    }
}

export const setFilterCategoriesThunk = (id) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        getFilterForCategories(id)
            .then((res) => {
                dispatch(productSetAll(res))
            })
            .finally(() => dispatch(setIsLoading(false)));
    }
}

export const setSingUpThunk = (data) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true))
        return singUp(data)
            .then(() => {
                dispatch(setNotification('Usuario creado con exito'))
            })
            .catch(error => error)
            .finally(() => dispatch(setIsLoading(false)))
    }
}

export const setCartProductsThunk = () => {
    return (dispatch) => {
        getProductsFromCart()
            .then((res) => {
                dispatch(setProductstoCart(res))
            })
    }
}

export const setFilterHeadlineThunk = (headline) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true))
        return getFilterHeadline(headline)
            .then((res) => {
                dispatch(productSetAll(res))
            })
            .finally(() => dispatch(setIsLoading(false)))
    }
}



export const deleteCartProductThunk = (id) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true))
        return deleteProductCart(id)
            .then(() => {
                dispatch(setCartProductsThunk())
            })
            .finally(() => dispatch(setIsLoading(false)))
    }
}



// dispatch(productSetAll())
// dispatch(productSetById(data))

