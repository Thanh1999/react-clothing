
import { ReduxAction } from "../action";
import { CartActionTypes } from "./cart.types"
const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    isFetching: false
}

const cartReducer = (state = INITIAL_STATE, action: ReduxAction) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            };
        case CartActionTypes.FETCH_CART_START:
            return {
                ...state,
                isFetching: true
            }
        case CartActionTypes.FETCH_CART_SUCCESS:
            return {
                ...state,
                isFetching: false,
                cartItems: action.payload
            }
        default:
            return state
    }
}

export default cartReducer