import { ReduxAction } from "../action";
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    selectedCollection: null,
    isFetching: false,
    erroMessage: null
}

const shopReducer = (state = INITIAL_STATE, action: ReduxAction) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
        case ShopActionTypes.FETCH_COLLECTIONS_PREVIEW_START:
        case ShopActionTypes.FETCH_COLLECTION_DETAIL_START:
            return {
                ...state,
                isFetching: true,
                erroMessage: null
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            };
        case ShopActionTypes.FETCH_COLLECTION_DETAIL_SUCCESS:
            return {
                ...state,
                selectedCollection: action.payload,
                isFetching: false
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                erroMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer