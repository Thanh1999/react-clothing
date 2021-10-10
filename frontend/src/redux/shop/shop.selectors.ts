import { createSelector } from "reselect"
import { RootState } from "../root-state"

const selectShop = (state: RootState) => state.shop

export const selectCollections = createSelector(
    [selectShop], shop => (shop.collections)
)

export const selectSelectedCollection = createSelector(
    [selectShop], shop => (shop.selectedCollection)
)

export const selectCollectionIsFetching = createSelector(
    [selectShop], shop => shop.isFetching
)

export const selectCollectionError = createSelector(
    [selectShop], shop => shop.erroMessage
)