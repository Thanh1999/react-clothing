import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSucess = (collections) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
})

export const fetchCollectionsFailure = (message) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: message
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => {
            const map = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSucess(map));
        }
        ).catch(error => {
            dispatch(fetchCollectionsFailure(error.message))
        })
    }
}