import { data } from "./data";
import { ProductCard, Select, Button } from '../../components'

const Catalog = () => {
    return (
        <div>
            <div className="row justify-content-between">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <Select options={
                                [
                                    { id:1, name:'select 1', },
                                    { id:2, name:'select 2', },
                                ]
                            }/>
                        </div>
                        <div className="col">
                            <Select options={
                                [
                                    { id:1, name:'select 1', },
                                    { id:2, name:'select 2', },
                                ]
                            }/>
                        </div>
                        <div className="col">
                            <Select options={
                                [
                                    { id:1, name:'select 1', },
                                    { id:2, name:'select 2', },
                                ]
                            }/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <Button text="apply" type="apply-button" />
                </div>
            </div>

            <div className="row justify-content-between">
                {
                    data.map((item)=>{
                        return (
                            <div className="col m-4">
                                <ProductCard {...item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catalog