import customAxios from "./custom-axios"

class CollectionService {
    static getListCollection() {
        console.log("Fetch collection!")
        return customAxios.get('/collection')
            .then(({ data }) => data)
    }

    static getListCollectionPreview() {
        console.log("Fetch preview collection!")
        return customAxios.get('/collection/preview')
            .then(({ data }) => data)
    }

    static getDetailCollection(id: number) {
        console.log("Fetch preview collection!")
        return customAxios.get(`/collection/${id}`)
            .then(({ data }) => data)
    }
}

export default CollectionService