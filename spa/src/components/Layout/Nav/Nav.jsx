import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

import './styles.scss'
import {cartSelectors} from '../../../store/selectors'

export const Nav = () => {
    const cartAmount = useSelector(cartSelectors.getCartAmount)
    return (
        <nav className="navbar">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/catalog" className="nav-item">Catalog</Link>
            <Link to="/cart" className="nav-item">Cart ({cartAmount})</Link>
        </nav>
    );
};