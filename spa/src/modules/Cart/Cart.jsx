import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom";

import { cartSelectors } from '../../store/selectors'
import { cartActions } from '../../store/actions'
import {Button} from "../../components";
import './styles.scss'

const Cart = () => {
    const [cart, setCart] = useState([])
    const cartData = useSelector(cartSelectors.getCart);
    const cartDataAmount = useSelector(cartSelectors.getCartAmount);
    const cartTotalPrice = useSelector(cartSelectors.getTotalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const backToCatalog = () => {
        return navigate('/catalog')
    }

    const addToCard = (item) => {
        dispatch(cartActions.addToCart(item))
    }

    const removeFromCard = (id) => {
        dispatch(cartActions.removeFromCart(id))
    }

    useEffect(()=>{
        setCart(cartData);
    }, [])

    useEffect(()=>{
        setCart(cartData);
    }, [cartDataAmount])

    return (
        <div>
            {cart.map((item) => {
                return (
                    <div className="pizza">
                        <img className="img" src={item.img}/>
                        <div className="props">
                            <span>{item.name}</span>
                            <span className="sign" onClick={() => addToCard(item)}>+</span>
                            <span>{item.amount}</span>
                            <span className="sign" onClick={() => removeFromCard(item.id)}>-</span>
                            Price :<span>{item.price * item.amount}</span>
                        </div>
                    </div>
            )
            })}
            <div className="priceSum">
                <h5>Total Price:{
                    cartTotalPrice
                }</h5>
            </div>
            <div className="buttons">
                <Button text="Back To Catalog" handleClick={backToCatalog} />
                <Button text="Continue" handleClick={()=>{}} />
            </div>
        </div>
    )
}

export default Cart;