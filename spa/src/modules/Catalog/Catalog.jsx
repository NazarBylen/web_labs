import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"
import {ProductCard, Filter, Search, Loader} from '../../components'
import {getCatalogItems, getItem} from '../../api'

const products = [];

const Catalog = () => {
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [localProducts, setLocalProducts] = useState([]);
    const [filters, setFilters] = useState({
        type:'усі',
        weight:'усі'
    });
    const navigate = useNavigate();
    const openItem = (id) => {
        navigate(`/catalog/item/${id}`)
    }

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        if(!event.target.value){
            getCatalogItems().then((data)=>{
                setLocalProducts(data.data);
            })
        }
    }

    const handleSearch = () => {
        if (!searchValue.length) return;
        const filtersString = `type:${filters.type};weight:${filters.weight}`
        const queryParams = {
            search: searchValue,
            filters: filtersString
        }

        setLoading(true)
        setTimeout(()=>{
            getCatalogItems(queryParams).then((data)=>{
                setLocalProducts(data.data);
            }).finally(()=>{
                setLoading(false)
            })
        }, 1000)
    }

    const handleSelectFilter = (event, filterType) => {
        const newFilters = {
            ...filters,
            [filterType]: event.target.value
        }
        setFilters(newFilters);
    }

    const handleFilter = () => {
        const filtersString = `type:${filters.type};weight:${filters.weight}`
        const queryParams = {filters: filtersString}
        if(searchValue.length){
            queryParams['search'] = searchValue;
        }

        setLoading(true)
        setTimeout(()=>{
            getCatalogItems(queryParams).then((data)=>{
                setLocalProducts(data.data);
            }).finally(()=>{
                setLoading(false)
            })
        }, 1000)
    }

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            getCatalogItems().then((data)=>{
                console.log(data);
                setLocalProducts(data.data)
            }).finally(()=>{
                setLoading(false)
            })
        }, 1000)
    },[])

    return !loading ? (
        <div>
            <div className="row justify-content-between">
                <div className="row">
                    <div className="col">
                        <Search handleSearch={handleSearch} handleInputChange={handleInputChange}/>
                    </div>
                </div>
                <div className="col">
                    <Filter handleFilter={handleFilter} selectedFilters={filters} handleSelectFilter={handleSelectFilter}/>
                </div>
            </div>

            <div className="row justify-content-between">
                {
                    localProducts.length ? localProducts.map((item)=>{
                            return (
                                <div className="col m-4" key={item.id}>
                                    <ProductCard {...item} handleClick={() => openItem(item.id)}/>
                                </div>
                            )
                        }):
                        (<h3>No results found</h3>)
                }
            </div>
        </div>
    ) : <Loader />
}

export default Catalog