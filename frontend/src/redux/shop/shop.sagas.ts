import { takeLatest, call, put, all } from "@redux-saga/core/effects"
import { Collection } from "../../model/Collection";
import { CollectionService } from "../../services";
import { ReduxAction } from "../action";
import { fetchCollectionDetailSucess, fetchCollectionsFailure, fetchCollectionsSucess } from "./shop.actions";
import ShopActionTypes from "./shop.types";


export function* fetchCollectionAsync() {
    try {
        const collections: Array<Collection> = yield CollectionService.getListCollection()
        yield put(fetchCollectionsSucess(collections));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionPreviewAsync() {
    try {
        const collections: Array<Collection> = yield CollectionService.getListCollectionPreview()
        yield console.log("Begin oreview collections");
        yield put(fetchCollectionsSucess(collections));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchDetailCollectionAsync(action: ReduxAction) {
    try {
        const collection: Collection = yield CollectionService.getDetailCollection(action.payload)
        yield put(fetchCollectionDetailSucess(collection));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* fetchCollectionPreviewStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_PREVIEW_START, fetchCollectionPreviewAsync)
}

export function* fetchDetailCollection() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_DETAIL_START, fetchDetailCollectionAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart),
        call(fetchDetailCollection),
        call(fetchCollectionPreviewStart),
    ])
}