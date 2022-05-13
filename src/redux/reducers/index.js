import { actions } from "../actions";

const INITIAL_STATE = {
    products: [],
    productInfo: {},
    isLoading: false,
    categories: [],
    notification: '',
    cart: []
}

export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.productSetAll:
            return {
                ...state,
                products: action.payload
            }
        case actions.productSetInfoSetById:
            return {
                ...state,
                productInfo: action.payload
            }
        case actions.setIsLoading:
            return {
                ...state,
                isLoading: action.payload
            }
        case actions.setCategories:
            return {
                ...state,
                categories: action.payload
            }
        case actions.setNotification:
            return {
                ...state,
                notification: action.payload
            }
        case actions.cartSetProducts:
            return {
                ...state,
                cart: action.payload
            }

        default:
            return state;
    }
}



