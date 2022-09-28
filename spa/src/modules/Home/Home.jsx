import {Card} from '../../components'
import { Button } from '../../components'
import { PromoCard } from '../../components';
import BikePizza from '../../assets/img/BikePizza.png'
import threePlusOne from '../../assets/img/threePlusOne.png'
import twentyPercents from '../../assets/img/twentypercents.png'
import twoPlusOne from '../../assets/img/twoPlusOne.png'

const cards = [
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
];

const Home = () => {
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
                       <div key={item.id} className="col">
                           <Card
                               image={item.image}
                               title={item.title}
                               desc={item.desc}
                           />
                       </div>
                   )
               })}
           </div>
            <Button
                text="View more"
            />
        </div>
    );
};

export default Home;