import React, { createContext, useReducer } from 'react';
import foods from '../../data/products.json';
import { ADD_TO_CART, ADD_TO_WISHLIST, GET_PRODUCT, REMOVE_PRODUCT } from '../actions/types';

export const FoodDataContext = createContext();

const init = {
    products: foods || [],
    product: {},
    cart: [],
    wishlist: [],
}

const cartReducer = (state = init, action) => {
    switch (action.type) {
        case GET_PRODUCT: {
            const id = action.payload.id;
            console.log("id", id);
            const product = state.products.find(product => product.id == id);

            return {
                ...state,
                product: product
            }
        }

        case ADD_TO_CART: {
            const selectedProduct = action.payload.product;
            const hasProduct = state.cart.find(p => p.id == selectedProduct.id);

            if (hasProduct) {
                hasProduct.quantity = hasProduct.quantity + 1;
                const productIndex = state.cart.findIndex(p => p.id == selectedProduct.id);
                state.cart[productIndex] = hasProduct;

                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            return {
                ...state,
                cart: [selectedProduct, ...state.cart]
            }
        }

        case ADD_TO_WISHLIST: {
            const selectedP = action.payload.product;
            const hasProduct = state.wishlist.find(p => p.id == selectedP.id);
            if (hasProduct) {
                alert('already product added wishlist')
                return {
                    ...state,
                }
            }
            return {
                ...state,
                wishlist: [selectedP, ...state.cart]
            }

        }

        case REMOVE_PRODUCT: {
            return {
                ...state,
                cart: state.cart.filter(p => p.id != action.payload.id)
            }
        }

        default:
            return state;
    }
}

const FoodDataProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, init);

    return (
        <FoodDataContext.Provider value={{ state, dispatch }}>
            {props.children}
        </FoodDataContext.Provider>
    )
}

export default FoodDataProvider;