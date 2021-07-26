import { takeLatest, call, put } from "@redux-saga/core/effects"
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { fetchCollectionsFailure, fetchCollectionsSucess } from "./shop.actions";
import ShopActionTypes from "./shop.types"

export function* fetchCollectionAsync() {
    try{
    const collectionRef = firestore.collection('collections');
    
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSucess(collectionMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}