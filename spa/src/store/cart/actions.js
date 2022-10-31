import {ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes'

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: {item},
    }
};

export const removeFromCart = (removalId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {removalId},
    }
};