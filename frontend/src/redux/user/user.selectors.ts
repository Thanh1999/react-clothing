import { createSelector } from "reselect"
import { RootState } from "../root-state"

const selectUser = (state: RootState) => state.user
const selectCart = (state: RootState) => state.cart

export const selectCurrentUser = createSelector([selectUser],
    (user) => user.currentUser)

export const selectUserLoading = createSelector([selectUser],
    (user) => user.isLoading)

export const selectCartHidden = createSelector([selectCart],
    (cart) => cart.hidden)