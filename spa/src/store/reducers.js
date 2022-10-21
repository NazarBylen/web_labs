import { combineReducers } from 'redux';

import {reducer as cartReducer} from './cart'

const rootReducer = combineReducers({
    cart: cartReducer
});

export default rootReducer;
