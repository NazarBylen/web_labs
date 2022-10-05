import './styles.scss'
import {Button} from '../Button'

export const ProductCard = (props) => {
    return (
        <div className="item">
            <img src={ props.img } className="img"/>
            <div className="title">{ props.name }</div>
            <div className="description">{ props.desc }</div>
            <div className="properties"><span className="price">{ props.price } грн</span> / <span>{ props.weight } г.</span></div>
            <div className="button-wrap">
                <Button text="Замовити"/>
            </div>
        </div>
    )
}