import { ADD_TO_CART, ADD_TO_WISHLIST, GET_PRODUCT, REMOVE_PRODUCT } from "./types";

export const addToCart = (gevenProduct, quantity) => {
    let product = {...gevenProduct};
    product.quantity = quantity || 1;
    
    return ({
        type: ADD_TO_CART,
        payload: {
            product
        }
    })
}

export const getProducts = (id) => {
    console.log("Get Product called", id)
    return ({
        type: GET_PRODUCT,
        payload: {
            id
        }
    })
}

export const removeProductFromCart = (id) => {
    return ({
        type: REMOVE_PRODUCT,
        payload: {
            id
        }
    })
}
export const addToWishlist = (product) => {
    return ({
        type: ADD_TO_WISHLIST,
        payload: {
            product
        }
    })
}