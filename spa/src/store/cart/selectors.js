export const getCart = (state) => {
    return state.cart.data;
};

export const getCartAmount = (state) => {
    return state.cart.data.reduce((acc, item) => {
        return acc+item.amount
    }, 0);
};

export const getTotalPrice = (state) => {
    return state.cart.data.reduce((acc, item) => {
        return acc + (item.price * item.amount)
    }, 0)
}