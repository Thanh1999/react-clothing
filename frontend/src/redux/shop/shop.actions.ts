import { Collection } from "../../model/Collection";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsPreviewStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_PREVIEW_START,
})

export const fetchCollectionDetailStart = (id: number) => ({
    type: ShopActionTypes.FETCH_COLLECTION_DETAIL_START,
    payload: id
})

export const fetchCollectionsSucess = (collections: Array<Collection>) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
})

export const fetchCollectionDetailSucess = (selectedCollection: Collection) => ({
    type: ShopActionTypes.FETCH_COLLECTION_DETAIL_SUCCESS,
    payload: selectedCollection
})

export const fetchCollectionsFailure = (message: string) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: message
})

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());
//         collectionRef.get().then(snapshot => {
//             const map = convertCollectionSnapshotToMap(snapshot);
//             dispatch(fetchCollectionsSucess(map));
//         }
//         ).catch(error => {
//             dispatch(fetchCollectionsFailure(error.message))
//         })
//     }
// }