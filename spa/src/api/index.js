import {http} from '../services/http'

export const getCatalogItems = (params) => {
    return http.get("/catalog/items", {
        params: params
    })
}

export const getItem = (id) => {
    return http.get(`/catalog/item/${id}`);
}