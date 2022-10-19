const {data} = require('./data');
const assert = require("assert");

async function getAll(req) {
    try {
        const {search, filters} = req.query;
        if(search && filters){
            const searchResults = data.filter((item) => {
                const itemName = item.name.toLowerCase();
                return itemName.includes(search.toLowerCase());
            });
            if(searchResults.length){
                const filtersArray = filters.split(';')
                const filtersNormalized = {}
                filtersArray.forEach(item => {
                    const modifiedItem = item.split(':')
                    filtersNormalized[modifiedItem[0]] = modifiedItem[1]
                })
                const results = searchResults.filter((item) => {
                    if (filtersNormalized.type === 'усі' && filtersNormalized.weight === 'усі') {
                        return true;
                    } else if (filtersNormalized.type === 'усі') {
                        return String(item.weight) === filtersNormalized.weight;
                    } else if (filtersNormalized.weight === 'усі') {
                        return item.type === filtersNormalized.type
                    }
                    return item.type === filtersNormalized.type && String(item.weight) === filtersNormalized.weight;
                });
                return results;
            }
            return [];
        }
        else if (search) {
            const results = data.filter((item) => {
                const itemName = item.name.toLowerCase();
                return itemName.includes(search.toLowerCase());
            });
            return results;
        } else if (filters) {
            const filtersArray = filters.split(';')
            const filtersNormalized = {}
            filtersArray.forEach(item => {
                const modifiedItem = item.split(':')
                filtersNormalized[modifiedItem[0]] = modifiedItem[1]
            })
            const results = data.filter((item) => {
                if (filtersNormalized.type === 'усі' && filtersNormalized.weight === 'усі') {
                    return true;
                } else if (filtersNormalized.type === 'усі') {
                    return String(item.weight) === filtersNormalized.weight;
                } else if (filtersNormalized.weight === 'усі') {
                    return item.type === filtersNormalized.type
                }
                return item.type === filtersNormalized.type && String(item.weight) === filtersNormalized.weight;
            });
            return results;
        }
        return data;
    } catch (error) {
        throw new Error(`Something Went Wrong!`);
    }
}

async function getOne(id) {
    try {
        return data.filter((i) => {
            return i.id === id
        })[0];
    } catch (error) {
        throw new Error(`Something Went Wrong!`);
    }
}


module.exports = {
    getAll,
    getOne
}

