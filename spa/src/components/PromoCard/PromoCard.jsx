import './styles.scss'

export const PromoCard = (props) => {
    return (
        <div className="promo">
            <img src={props.image} className="promoCard" alt="PromoCard" />
            <div className="texts">
                <h1>Доставка до 30хв, або безкоштовно!</h1>
                <p>Привеземо гарячу мегасмачну піцу до 30 хвилин або подаруємо безкоштовну піцу до на наступного замовлення!Для подальшого отримання подарунку потрібно зазнчити номер чеку, коли пр идзвінку ми звірятимемо ваше замовлення</p>
            </div>
        </div>
    )
}