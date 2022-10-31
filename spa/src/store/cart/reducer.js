import {ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes';
import cart from "../../modules/Cart/Cart";

const initialState = {
    data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART: {
            let newData = state.data;

            const newItem = {
                ...payload.item,
                amount: 1
            }

            const cartDataIndex = state.data.findIndex((item)=>{
                return item.id === newItem.id;
            })

            if(cartDataIndex === -1){
                newData = [...state.data, newItem]
            } else {
                newData[cartDataIndex].amount++;
            }

            return { ...state, data:newData };
        }

        case REMOVE_FROM_CART: {

            let newData = state.data;

            const cartDataIndex = state.data.findIndex((item)=>{
                return item.id === payload.removalId;
            })

            if(cartDataIndex>=0){

                const currItem = newData[cartDataIndex]

                if(currItem.amount>1){
                    currItem.amount--;
                } else {
                    newData = state.data.filter((item) => item.id !== payload.removalId)
                }

            }
            return { ...state, data: newData };
        }
        default:
            return state;
    }
};