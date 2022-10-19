import { useParams, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'

import {Button, Loader} from "../../components";
import {getItem} from '../../api'

const Item = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => {
        return navigate('/catalog')
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            getItem(id).then((item)=>{
                setItem(item.data);
            }).finally(()=>{
                setLoading(false)
            })
        }, 1000)
    }, [])
    return !loading
            ? (
                <div className="row" style={{marginBottom:"50px"}}>
                    <img src={item.img} className="col" style={{maxWidth:"600px", borderRadius:"7%"}} />
                    <div className="col">
                        <div className="row d-flex flex-column">
                            <h3 className="col" style={{marginBottom:'20px'}}>{item.name}</h3>
                            <div className="col" style={{marginBottom:'20px'}}>{item.desc}</div>
                            <h5 className="col" style={{marginBottom:'20px'}}>{item.price}грн</h5>
                        </div>
                        <div className="row" style={{gap:"15px"}}>
                            <div className="col" style={{maxWidth:"160px"}}>
                                <Button text="Go Back" handleClick={goBack} />
                            </div>
                            <div className="col">
                                <Button text="Add To Cart" />
                            </div>
                        </div>
                    </div>
                </div>
            )
            : (<Loader />)
};

export default Item;