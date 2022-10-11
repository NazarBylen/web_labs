import {useEffect, useState} from 'react'

import './styles.scss'
import {Card} from '../../components'
import { Button } from '../../components'
import { PromoCard } from '../../components';
import BikePizza from '../../assets/img/BikePizza.png'
import threePlusOne from '../../assets/img/threePlusOne.png'
import twentyPercents from '../../assets/img/twentypercents.png'
import twoPlusOne from '../../assets/img/twoPlusOne.png'
import newPizza from '../../assets/img/newPizza.jpg'
import newPizza2 from '../../assets/img/newPizza2.jpg'
import newPizza3 from '../../assets/img/newPizza3.jpg'

const cardsData = [
    {
        id: 1,
        image: threePlusOne,
        title: 'Акція 3+1!',
        desc: 'Замовляй 3 піци та отримай 4-ту в подарунок!',
    },
    {
        id: 2,
        image: twentyPercents,
        title: '-20% за піцу',
        desc: 'Забирай замовлення та отримуй знижку 20%!',
    },
    {
        id: 3,
        image: twoPlusOne,
        title: 'Акція 2+1!',
        desc: 'Замовляй 3 піци та отримуй одну з них безкоштовно!',
    },
    {
        id: 4,
        image: newPizza,
        title: 'нова гостра піца',
        desc: 'Замовляй 4 таких та отримай 5-ту в подарунок!',
    },
    {
        id: 5,
        image: newPizza2,
        title: 'нова піца з овочами',
        desc: 'у подарунок поїздка в село на город',
    },
    {
        id: 6,
        image: newPizza3,
        title: 'нова піца з рибним соусом',
        desc: 'жодна риба не постраждала',
    },
];

const Home = () => {
    const [from, setFrom] = useState(0);
    const [cards, setCards] = useState([])
    const perPage = 3;
    const lastPage = 6;

    const getCards = () => {
        const to = from === 0 ? perPage : perPage+from
        const fetchedData = cardsData.slice(from, to);
        setCards([...cards, ...fetchedData]);
        setFrom(perPage+from);
    }

    const loadMore = () => {
        console.log('load - more');
        getCards();
    }

    useEffect(() => {
        getCards();
    }, [])

    return (
        <div>
           <div className="row">
               <div className="col">
                   <PromoCard
                       image={BikePizza}
                   />
               </div>
           </div>
           <div className="row justify-content-between">
               {cards.map(item => {
                   return (
                       <div key={item.id} className="col-4">
                           <Card
                               image={item.image}
                               title={item.title}
                               desc={item.desc}
                           />
                       </div>
                   )
               })}
           </div>
            {
                from < lastPage ? (
                    <div className="button-wrapper">
                        <Button text="View more" handleClick={loadMore}/>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Home;